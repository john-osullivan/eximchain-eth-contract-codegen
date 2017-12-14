'use strict';


/**
 *
 * addAddress_post_params AddAddress_post_params 
 * returns addAddress_post_params_response
 **/
exports.post_addAddress = function(addAddress_post_params) {
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

