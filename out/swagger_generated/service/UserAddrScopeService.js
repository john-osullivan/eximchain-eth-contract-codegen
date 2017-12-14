'use strict';
let EHTController = require("../../eth_connector/Controller.js");








/**
* @function
* @instance
* @param { userAddr_get_params } userAddr_get_params
* returns { Promise }
**/
exports.get_userAddr = function(userAddr_get_params) {
    return new EHTController().get_userAddr(
        userAddr_get_params.from,
         userAddr_get_params["bool"],
    );
};

/**
* @function
* @instance
* @param { userAddr_post_params } userAddr_post_params
* returns { Promise }
**/
exports.post_userAddr = function(userAddr_post_params) {
    return new EHTController().post_userAddr(
        userAddr_post_params.from, 
         userAddr_post_params["address"],
    );
};

