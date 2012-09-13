//
//var models = require('../../../models'),
//    async = require('async');
//
//module.exports = function(req, res){
//
//    var user = req.session.user;
//    var grade_obj;
//
//    async.parallel([
//        function(cbk){
//            models.Action.findById(req.params[0])
//                .select({
//                '_id':1,
//                'type':1,
//                'title':1,
//                'text_field':1,
//                'image_field':1,
//                'tags':1,
//                'location':1,
//                'execution_date':1,
//                'required_participants':1,
//                'cycle_id':1
//                })
//            .populate('cycle_id', {'_id':1,'title':1})
//            .exec(cbk);
//        },
//
//        function(cbk){
//            if(user){
//                models.GradeAction.findOne({user_id:user._id, action_id: req.params[0]}, function (err, grade) {
//                    if (grade) {
//                        grade_obj = {};
//                        grade_obj["grade_id"] = grade._id;
//                        grade_obj["value"] = grade.evaluation_grade;
//                    }
//                    cbk(err);
//                });
//            }else{
//                cbk();
//            }
//
//        }
//
//    ], function(err, args){
//
//        if(err)
//            res.render('500.ejs',{error:err});
//        else {
//            var pending_action = args[0];
//            pending_action = JSON.parse(JSON.stringify(pending_action));
//            pending_action.grade_obj = grade_obj;
//            if(!pending_action)
//                res.render('404.ejs');
//            else {
//                res.render('pending_action.ejs',{
//                    action: pending_action,
//                    tab:'actions'
//                });
//            }
//        }
//    });
//};
