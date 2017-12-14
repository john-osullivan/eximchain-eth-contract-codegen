'use strict';
let EHTController = require("./eth_connector/Controller.js");



/**
*
* addAddress_post_params AddAddress_post_params
* returns addAddress_post_params_response
**/
exports.post_addAddress = function(addAddress_post_params) {
    return new EHTController().post_addAddress(
        addAddress_post_params.from, 
         addAddress_post_params["user"],
    );
};


/**
*
* addAddress_post_params AddAddress_post_params
* returns addAddress_post_params_response
**/
exports.post_whitelistAddress = function(whitelistAddress_post_params) {
    return new EHTController().post_whitelistAddress(
        whitelistAddress_post_params.from, 
         whitelistAddress_post_params["user"],
    );
};

/**
*
* addAddress_get_params AddAddress_get_params
* returns addAddress_get_params_response
**/
exports.get_owner = function(owner_get_params) {
    return new EHTController().get_owner(
        owner_get_params.from,
         owner_get_params["address"],
    );
};

/**
*
* addAddress_post_params AddAddress_post_params
* returns addAddress_post_params_response
**/
exports.post_owner = function(owner_post_params) {
    return new EHTController().post_owner(
        owner_post_params.from, 
         owner_post_params["address"],
    );
};

/**
*
* addAddress_get_params AddAddress_get_params
* returns addAddress_get_params_response
**/
exports.get_userAddr = function(userAddr_get_params) {
    return new EHTController().get_userAddr(
        userAddr_get_params.from,
         userAddr_get_params["bool"],
    );
};

/**
*
* addAddress_post_params AddAddress_post_params
* returns addAddress_post_params_response
**/
exports.post_userAddr = function(userAddr_post_params) {
    return new EHTController().post_userAddr(
        userAddr_post_params.from, 
         userAddr_post_params["address"],
    );
};

