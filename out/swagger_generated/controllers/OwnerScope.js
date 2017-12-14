'use strict';

var utils = require('../utils/writer.js');
var OwnerScope = require('../service/OwnerScopeService');

module.exports.get_owner = function get_owner (req, res, next) {
  var owner_get_params = req.swagger.params['owner_get_params'].value;
  OwnerScope.get_owner(owner_get_params)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.post_owner = function post_owner (req, res, next) {
  var owner_post_params = req.swagger.params['owner_post_params'].value;
  OwnerScope.post_owner(owner_post_params)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
