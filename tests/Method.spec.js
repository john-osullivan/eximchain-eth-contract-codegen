'use strict';
const utils = require("./utils");
const Path = require("../blobs/Path");
const Swagger = require("../blobs/Swagger");
const Entity = require("../blobs/Entity");

let schema = [
    {
        className: "Method",
        call_instance(cls){
            let oa = new Swagger(null, null);
            return new cls(
                new Path("testpath", oa),
                "post",
                [],
                new Entity({}, {}, oa),
                oa
            );
        },
        output: {
            "post": {
                operationId: "post_testpath",
                tags: []
            }
        }
    }
];

utils.test(schema);