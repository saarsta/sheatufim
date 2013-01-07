
var common = require('./common')
models = require('../models'),
    async = require('async');

var FaceResource = module.exports = jest.Resource.extend(
    {


        init:function () {
            this._super(models.Face, null, null);
            this.allowed_methods = ['get'];
            //this.authentication = new common.SessionAuthentication();
            //this.filtering = {cycle: null};
//            this.default_query = function (query) {
//                return query.sort({creation_date: 'descending'});
//            };
        }   ,

        create_obj: function(req, fields, callback){
            // self._super(req, fields, callback);
        }
    }
)


var DailyDiscussionResource1 = module.exports = jest.MongooseResource.extend(
    {
        init:function () {
            this._super(models.DailyDiscussion, null, null);
            this.allowed_methods = ['get'];
            //this.authentication = new common.SessionAuthentication();
            //this.filtering = {cycle: null};
            this.default_query = function (query) {
                return query.where('is_visible', true).sort({creation_date: 'descending'});
            };
        }   ,

        create_obj: function(req, fields, callback){
            // self._super(req, fields, callback);
        }
    });
