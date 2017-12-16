'use strict';
const utils = require("./utils");

let schema = {
    className: "Property",
    description: "test for default definitions",
    call_instance(cls){
        return new cls({
            name: "prop-name",
            type: "string"
        });
    },
    output: {
        "prop-name": {
            type: "string"
        }
    }
};

utils.test(schema);

schema = {
    className: "Property",
    description: "test for custom definitions",
    call_instance(cls){
        return new cls({
            name: "prop-name",
            type: "address"
        });
    },
    output: {
        "prop-name": {
            $ref: "#/definitions/address"
        }
    }
};

utils.test(schema);