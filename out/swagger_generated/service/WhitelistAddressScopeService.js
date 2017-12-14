'use strict';


/**
 *
 * whitelistAddress_post_params WhitelistAddress_post_params 
 * returns whitelistAddress_post_params_response
 **/
exports.post_whitelistAddress = function(whitelistAddress_post_params) {
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

