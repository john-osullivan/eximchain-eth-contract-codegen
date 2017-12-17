'use strict';
const utils = require("./utils");
const Property = require("../blobs/Property");

let schema =
    [
        {
            className: "Definition",
            call_instance(cls){
                return new cls("def-test", "string");
            },
            output: {
                "def-test": {
                    type: "string"
                }
            }
        },
        {
            className: "Definition",
            call_instance(cls){
                return new cls("def-test", "object", [new Property({name: "sample", type:"string"})]);
            },
            output: {
                "def-test": {
                    type: "object",
                    properties: {
                        sample: {
                            type: "string"
                        }
                    }
                }
            }
        }
    ];

utils.test(schema);