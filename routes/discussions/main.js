var models = require('../../models')
    , DiscussionResource = require('../../api/discussions/DiscussionResource.js')
    , async = require('async')
    , notifications = require('../../api/notifications.js');

module.exports = function (req, res) {
    var resource = new DiscussionResource();
    var user = req.user;

    async.parallel([
        // get the discussion object
        function (cbk) {
            models.Discussion.findById(req.params[0])
                /*.populate('creator_id', {
                    '_id': 1,
                    'first_name': 1,
                    'last_name': 1})*/
                .populate('subject_id', {
                    '_id': 1,
                    'name': 1,
                    'cover_image_field': 1,
                    'image_field' : 1,
                    'is_no_sheatufim' : 1,
                    'host_details' : 1
                })
                .exec(cbk);
        },

        function (cbk) {
            models.Discussion.update({ _id: req.params[0]}, {$inc: {view_counter: 1}}, cbk);
        }
    ],
        function (err, results) {
            if (err)
                return res.handle500(err);

            var discussion = results[0];
            if (!discussion)
                return res.redirect('/');

            if (!discussion.isUserAllowed(req.user))
                return res.redirect('/discussions/subject/' + discussion.subject_id._id.toString());
            // populate 'is follower' , 'grade object' ...
            resource.get_discussion(discussion, user, function (err, discussion) {

                if (err)
                    return res.render('500.ejs', {error: err});
                res.setHeader("Expires", "0");

                var ejs = 'discussion_new.ejs';

                res.render(ejs, {
                    title: "דיון",
                    discussion_id: req.params[0],
                    subject_id: req.query.subject_id,
                    subject: discussion.subject_id,
                    is_no_sheatufim: discussion.subject_id.is_no_sheatufim,
                    tab: 'discussions',
                    discussion: discussion,
                    fb_description: discussion.text_field_preview,
                    fb_title: discussion.title,
                    fb_image: discussion.image_field && discussion.image_field.url,
                    avatar:req.session.avatar_url,
                    user: user && {_id: user._id, first_name: user.first_name, last_name: user.last_name, occupation: user.occupation},
                    meta: {
                        type: req.app.get('facebook_app_name') + ':discussion',
                        id: discussion.id,
                        image: ((discussion.image_field_preview && discussion.image_field_preview.url) ||
                            (discussion.image_field && discussion.image_field.url)),
                        title: discussion && discussion.title,
                        description: discussion.text_field_preview || discussion.text_field,
                        link: discussion && ('/discussions/' + discussion.id)
                    }
                });

                //update all notifications of user that connected to this object
                if (user){
                    var path = req.path.indexOf('#') == -1 ? req.path : req.path.substr(0, req.path.indexOf('#'));
                    notifications.updateVisited(user, req.path);
                }
            });
        });

};
