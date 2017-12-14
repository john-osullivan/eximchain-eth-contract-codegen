'use strict';

var utils = require('../utils/writer.js');
var UserAddrScope = require('../service/UserAddrScopeService');

module.exports.get_userAddr = function get_userAddr (req, res, next) {
  var userAddr_get_params = req.swagger.params['userAddr_get_params'].value;
  UserAddrScope.get_userAddr(userAddr_get_params)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.post_userAddr = function post_userAddr (req, res, next) {
  var userAddr_post_params = req.swagger.params['userAddr_post_params'].value;
  UserAddrScope.post_userAddr(userAddr_post_params)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
