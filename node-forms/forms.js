var util = require('util')
    //,Models = require('./models')
    ,fields = require('./fields')
    ,common = require('./common'),
    mongoose = require('mongoose');

var async = require('async');

var Models = {};

exports.set_models = function(models)
{
    Models = models;
};

exports.checkDependecies = function(model,id,callback)
{
    var models_to_query = {};
    for(var modelName in Models)
    {
        var model_ref = Models[modelName];
        if(!Models[modelName].schema)
            continue;
        for(var fieldName in model_ref.schema.paths)
        {
            if(model_ref.schema.paths[fieldName].options.ref && model_ref.schema.paths[fieldName].options.ref == model)
            {
                models_to_query[modelName] = models_to_query[modelName] || [];
                var query_dict = {};
                query_dict[fieldName] = id;
                models_to_query[modelName].push(query_dict);
            }
        }
    }
    var funcs = [];
    function query_func(modelName)
    {
        return function(cbk)
        {
            Models[modelName].find({$or:models_to_query[modelName]},cbk);
        }
    }
    for(var modelName in models_to_query)
    {
        funcs.push(query_func(modelName));
    }
    async.parallel(funcs,function(err,results)
    {
       var all_results = [];
        for(var i=0; i<results.length; i++)
        {
            if(results[i] && results[i].length)
            {
                all_results = all_results.concat(results[i]);
            }
        }
        callback(err,all_results);
    });
};

var BaseForm = exports.BaseForm = function(request,options) {
    this.fields = {};
    options = options || {};
    this.data = options.data || request.data || {};
    this.files = options.files || request.files || {};
    this.request = request;
    this._fields_ready = false;
    this.fieldsets = null;
    this.errors = {};
    this.static = options.static || {};
    this.static['js'] = this.static['js'] || [];
    this.static['js'].push('/node-forms/js/forms.js');
    this.static['js'].push('/node-forms/js/jquery-ui-1.8.18.custom.min.js');
    this.static['js'].push('/node-forms/js/jquery-ui-timepicker-addon.js');
    this.static['js'].push('https://maps-api-ssl.google.com/maps/api/js?v=3&sensor=false&language=he&libraries=places');
    this.static['js'].push('/node-forms/js/maps.js');
    this.static['css'] = this.static['css'] || [];
    this.static['css'].push('/node-forms/css/ui-lightness/jquery-ui-1.8.18.custom.css');
    this.static['css'].push('/node-forms/css/forms.css');
};

BaseForm.prototype.render_head = function(res)
{
    var self = this;
    return common.writer_to_string(function(res)
    {
        if(!self.static)
            return;
        if(self.static['js'])
            for(var i=0; i<self.static['js'].length; i++)
                res.write('<script src="' + self.static['js'][i] + '"></script>')
        if(self.static['css'])
            for(var i=0; i<self.static['css'].length; i++)
                res.write('<link type="text/css" href="' + self.static['css'][i] + '" rel="stylesheet">');
    },1000);
};

BaseForm.prototype.get_fields = function()
{
    for(var attr in this)
    {
        if(this[attr] instanceof fields.BaseField)
        {
            this.fields[attr] = this[attr];
        }
    }
};

BaseForm.prototype.get_value = function(field_name)
{
    return this.data[field_name];
};

BaseForm.prototype.init_fields = function(req)
{
    this.get_fields();
    for(var field_name in this.fields)
    {
        var value = this.get_value(field_name);
        this.fields[field_name].set(value,this.request).name = field_name;
    }
    this._fields_ready = true;
};

BaseForm.prototype.save = function(callback)
{
    if(!this._fields_ready)
        this.init_fields();
    // not implemented
    if(!this.errors)
        this.is_valid();
    if(Object.keys(this.errors) > 0)
        callback({message:'form did not validate'});
    else
        this.actual_save(callback);
};

BaseForm.prototype.actual_save = function(callback)
{
    callback({message:'not implmeneted'});
};

BaseForm.prototype.is_valid = function(callback)
{
    var self = this;
    if(!self._fields_ready)
        self.init_fields();
    self.errors = {};
    self.clean_values = {};
    var clean_funcs = [];
    function create_clean_func(field_name)
    {
        return function(cbk)
        {
            self.fields[field_name].clean_value(self.request,function(err)
            {
                if(err)
                    callback(err);
                else
                {
                    if(self.fields[field_name].errors && self.fields[field_name].errors.length)
                        self.errors[field_name] = self.fields[field_name].errors;
                    else
                        self.clean_values[field_name] = self.fields[field_name].value;
                    cbk(null);
                }
            });
        };
    }
    for(var field_name in self.fields)
    {
        clean_funcs.push(create_clean_func(field_name));
    }
    async.parallel(clean_funcs,function(err,results)
    {
       if(err)
         callback(err);
       else
          callback(null,Object.keys(self.errors).length == 0);
    });
};

BaseForm.prototype.render_ready = function(callback)
{
    if(!this._fields_ready)
        this.init_fields();
    var funcs = [];
    var self = this;
    function render_func(field)
    {
        return function(cb)
        {
            field.pre_render(cb);
        };
    }
    for(var field_name in this.fields)
    {
        funcs.push(render_func(this.fields[field_name]));
    }
    async.parallel(funcs,function(err,results)
    {
        if(err)
            callback(err);
        else
            callback(null);
    });
};


BaseForm.prototype.render = function(res,options)
{
    var self = this;
    options = options || {};
    function render_fields(fields)
    {
        for(var i=0; i<fields.length; i++)
        {
            var field_name = fields[i];
            if(typeof(field_name) == 'object')
                render_fieldset(field_name);
            else
                self.fields[field_name].render_with_label(res);
        }
    };
    function render_fieldset(fieldset)
    {
        if(fieldset['title'] && fieldset['title'] != '' && !options.hide_fieldsets)
            res.write('<div class="nf_fieldset">');
        var title = fieldset['title'] || '';
        if(title != '' && !options.hide_titles)
            res.write('<h2>' + title + '</h2>');
        res.write('<div>');
        var fields = fieldset.fields;
        if(fields)
            render_fields(fields);
        res.write('</div>');
        if(fieldset['title'] && fieldset['title'] != '' && !options.hide_fieldsets)
            res.write("</div>");
    };
    if(self.fieldsets)
    {
        render_fields(self.fieldsets[0].fields);
    }
    else
        render_fields(Object.keys(self.fields));
    res.write('<input type="hidden" id="document_id" name="_id" value="' + (self.instance.isNew ? '' : self.instance.id) + '" />');
};

BaseForm.prototype.render_str = function()
{
    var self = this;
    return common.writer_to_string(function(res)
    {
        self.render(res);
    },36000);
};

BaseForm.prototype.render_error = function(res,field_name)
{
    this.fields[field_name].render_error(res);
//    if(this.errors[field_name])
//        res.write(this.errors[field_name] + '');
};


var MongooseForm = exports.MongooseForm = function(request,options,model) {
    options = options || {};
    MongooseForm.super_.call(this,request,options);
    this.model = model;
    this.instance = options.instance || new this.model();
};

util.inherits(MongooseForm,BaseForm);

MongooseForm.prototype.get_fields = function()
{
    this.fields = {};
    this.fieldsets = [];
    mongoose_fields_to_fieldsets(this.model.schema.paths,this.model.schema.tree,this.fields,this.fieldsets);
    MongooseForm.super_.prototype.get_fields.call(this);
};

function mongoose_fields_to_fieldsets(field_paths,field_tree,ref_fields,ref_fieldsets)
{
    ref_fieldsets.push({title:'',fields:[]});
    for(var field in field_paths)
    {
        if(field == 'id' || field == '_id')
            continue;
        var parts = field.split('.');
        var form_field = mongoose_field_to_form_field(field_paths[field],parts[parts.length-1],field_tree);
        if(form_field)
            ref_fields[field] = form_field;
        var parent_fieldset = ref_fieldsets[0];
        for(var i=0; i<parts.length-1; i++)
        {
            var fieldset = null;
            for(var j=0; j<parent_fieldset.fields.length; j++)
            {
                if(typeof(parent_fieldset.fields[j])=='object' && parent_fieldset.fields[j].title == parts[i])
                {
                    fieldset = parent_fieldset.fields[j];
                }
            }
            if(!fieldset)
            {
                fieldset = {title:parts[i],fields:[]};
                parent_fieldset.fields.push(fieldset);
                //parent_fieldset.fieldsets = parent_fieldset.fieldsets || [];
                //parent_fieldset.fieldsets.push(fieldset);
            }
            parent_fieldset = fieldset;
        }
        parent_fieldset.fields = parent_fieldset.fields || [];
        parent_fieldset.fields.push(field);
    }
}

function mongoose_field_to_form_field(mongoose_field,name,tree)
{
    if(mongoose_field.options.auto || ('editable' in mongoose_field.options || mongoose_field.options.editable))
        return new fields.ReadonlyField({});
    var is_required = mongoose_field.options.required ? true : false;
    var def = mongoose_field.options['default'] || null;
    var validators = [];
    if(mongoose_field.options.validate)
    {
        validators.push(function(value)
        {
            var result = mongoose_field.options.validate[0](value);
            return result ? true : mongoose_field.options.validate[1];
        });
    }
    if(mongoose_field.options.min)
        validators.push(function(value)
        {
            if(value >= mongoose_field.options.min)
                return true;
            else
                return 'value must be equal or greater than ' + mongoose_field.options.min;
        });
    if(mongoose_field.options.max)
        validators.push(function(value)
        {
            if(value <= mongoose_field.options.max)
                return true;
            else
                return 'value must be equal or lower than ' + mongoose_field.options.max;
        });
    var options = {required:is_required,'default':def,validators:validators,label:name};
    if(Array.isArray(mongoose_field.options.type))
    {
        var path_parts = mongoose_field.path.split('.');
        var inner_schema = tree;
        for(var j=0; j<path_parts.length; j++)
        {
            inner_schema = inner_schema[path_parts[j]];
        }
        if(Array.isArray(inner_schema))
            inner_schema = inner_schema[0];
        else
        {
            if(inner_schema && inner_schema.type && Array.isArray(inner_schema.type) && !inner_schema.ref)
                inner_schema = inner_schema.type[0];
        }
        var schema;
        if(inner_schema && (typeof(inner_schema) != 'object' || inner_schema.type))
        {
//            return new fields.StringField(options);
        //inner_schema = {stam_lo_bemet:inner_schema};
            var single_field = {};
            for(var attr in inner_schema)
                single_field[attr] = inner_schema[attr];
            single_field['type'] = mongoose_field.options.type[0];
            schema = new mongoose.Schema({__self__:single_field});
        }
        else
        {
            if(mongoose_field.options.type[0].paths && mongoose_field.options.type[0].tree)
                schema = mongoose_field.options.type[0];
            else
                schema = new mongoose.Schema(mongoose_field.options.type[0]);
        }
        var list_fields = {};
        var list_fieldsets = [];
        mongoose_fields_to_fieldsets(schema.paths,schema.tree,list_fields,list_fieldsets);
        return new fields.ListField(options,list_fields,list_fieldsets);
    }
    if(mongoose_field.options.type.name == 'File')
    {
        return new fields.FileField(options);
    }
    if(mongoose_field.options.type.name == 'GeoPoint')
    {
        return new fields.GeoField(options);
    }
    if(mongoose_field.options.ref)
    {
        return new fields.RefField(options,Models[mongoose_field.options.ref]);
    }
    if(mongoose_field.options.enum)
    {
        return new fields.EnumField(options,mongoose_field.options.enum);
        }
    if(mongoose_field.options.type == Boolean)
        return new fields.BooleanField(options);
    if(mongoose_field.options.type == Number)
        return new fields.NumberField(options);
    if(mongoose_field.options.type == Date)
        return new fields.DateField(options);
    if(mongoose_field.instance && mongoose_field.instance == 'String')
        return new fields.StringField(options);
    return new fields.StringField(options);
};

MongooseForm.prototype.get_value = function(field_name)
{
    return (typeof(this.data[field_name]) == 'undefined' ||  this.data[field_name] == null) ? this.instance.get(field_name) : this.data[field_name];
};

MongooseForm.prototype.actual_save = function(callback)
{
    var self = this;
    for(var field_name in self.clean_values)
        self.instance.set(field_name,self.clean_values[field_name]);
    self.instance.save(function(err,object)
    {

       if(err)
       {
           if(err.errors)
               self.errors = err.errors;
           callback({message:'failed'});
       }
       else
       {
           callback(null,object);
       }
    });
};

