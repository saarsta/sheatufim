/**
 * Created by JetBrains WebStorm.
 * User: saar
 * Date: 08/07/12
 * Time: 15:09
 * To change this template use File | Settings | File Templates.
 */
var common = require('./common')
models = require('../models'),
    async = require('async');

var FounderResource = module.exports = common.BaseModelResource.extend(
    {
        init:function () {
            this._super(models.Founder);
            this.allowed_methods = ['get'];

            this.default_query = function (query) {
                return query.sort({'last_name': 'ascending',tag:1});
            };
        }
    }
)
