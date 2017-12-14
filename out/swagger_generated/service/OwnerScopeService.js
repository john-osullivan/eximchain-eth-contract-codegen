'use strict';


/**
 *
 * owner_get_params Owner_get_params 
 * returns owner_get_params_response
 **/
exports.get_owner = function(owner_get_params) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "address" : { }
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
 * owner_post_params Owner_post_params 
 * returns owner_post_params_response
 **/
exports.post_owner = function(owner_post_params) {
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

