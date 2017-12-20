'use strict';
let EHTController = require("./eth_connector/Controller.js");






/**
* @function
* @instance
* @param { owner_get_params } owner_get_params
* returns { Promise }
**/
exports.get_owner = function(owner_get_params) {
    return new EHTController().get_owner(
        owner_get_params.from,
         owner_get_params["address"],
    );
};

/**
* @function
* @instance
* @param { owner_post_params } owner_post_params
* returns { Promise }
**/
exports.post_owner = function(owner_post_params) {
    return new EHTController().post_owner(
        owner_post_params.from, 
         owner_post_params["address"],
    );
};



