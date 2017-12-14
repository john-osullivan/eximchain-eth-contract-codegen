'use strict';
let EHTController = require("../../eth_connector/Controller.js");



/**
* @function
* @instance
* @param { addAddress_post_params } addAddress_post_params
* returns { Promise }
**/
exports.post_addAddress = function(addAddress_post_params) {
    return new EHTController().post_addAddress(
        addAddress_post_params.from, 
         addAddress_post_params["user"],
    );
};







