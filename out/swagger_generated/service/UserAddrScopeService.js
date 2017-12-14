'use strict';


/**
 *
 * userAddr_get_params UserAddr_get_params 
 * returns userAddr_get_params_response
 **/
exports.get_userAddr = function(userAddr_get_params) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "bool" : true
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 *
 * userAddr_post_params UserAddr_post_params 
 * returns userAddr_post_params_response
 **/
exports.post_userAddr = function(userAddr_post_params) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "receipt" : {
    "hash" : "hash"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

