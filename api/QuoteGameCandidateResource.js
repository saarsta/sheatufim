
var common = require('./common')
models = require('../models'),
    async = require('async');

var QuoteGameCandidateResource = module.exports = jest.MongooseResource.extend(
    {
        init:function () {
            this._super(models.QuoteGameCandidate, null, null);
            this.allowed_methods = ['get'];

        }
    });