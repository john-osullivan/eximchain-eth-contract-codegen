'use strict';

var utils = require('../utils/writer.js');
var Admins = require('../service/AdminsService');

module.exports.post_whitelistAddress = function post_whitelistAddress (req, res, next) {
  var whitelistAddress_post_params = req.swagger.params['whitelistAddress_post_params'].value;
  Admins.post_whitelistAddress(whitelistAddress_post_params)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
