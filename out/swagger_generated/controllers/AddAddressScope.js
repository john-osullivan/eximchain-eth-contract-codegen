'use strict';

var utils = require('../utils/writer.js');
var AddAddressScope = require('../service/AddAddressScopeService');

module.exports.post_addAddress = function post_addAddress (req, res, next) {
  var addAddress_post_params = req.swagger.params['addAddress_post_params'].value;
  AddAddressScope.post_addAddress(addAddress_post_params)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
