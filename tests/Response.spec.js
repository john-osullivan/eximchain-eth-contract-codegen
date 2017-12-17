'use strict';
const utils = require("./utils");
const Response = require("../blobs/Response");

let schema = {
    className: "Response",
    execute(cls){
        let rsp = new cls(200, [], "description");
        rsp.setSchema("def_resp");
        return rsp;
    },
    output: {
        200: {
            description: "description",
            schema: {
                $ref: "#/definitions/def_resp"
            }
        }
        ,
    }
};

utils.test(schema);