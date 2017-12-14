'use strict';

var utils = require('../utils/writer.js');
var WhitelistAddressScope = require('../service/WhitelistAddressScopeService');

module.exports.post_whitelistAddress = function post_whitelistAddress (req, res, next) {
  var whitelistAddress_post_params = req.swagger.params['whitelistAddress_post_params'].value;
  WhitelistAddressScope.post_whitelistAddress(whitelistAddress_post_params)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
