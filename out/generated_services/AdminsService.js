'use strict';
let EHTController = require("../eth_connector/Controller.js");





/**
* @function
* @instance
* @param { whitelistAddress_post_params } whitelistAddress_post_params
* returns { Promise }
**/
exports.post_whitelistAddress = function(whitelistAddress_post_params) {
    return new EHTController().post_whitelistAddress(
        whitelistAddress_post_params.from, 
         whitelistAddress_post_params["user"],
    );
};





