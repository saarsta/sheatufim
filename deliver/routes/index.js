var Router = require('./router'),
    Navigation = require('./navigation'),
    InformationItems = require('./information_items'),
    Discussions = require('./discussions'),
    Account = require('./account');



module.exports = function(app) {
    var router = Router.base(app);
    router.get('/', Navigation.index);

    router.include('/account',Account.routing);

    router.include('/information_items',InformationItems);

    router.include('/discussions',Discussions);
};