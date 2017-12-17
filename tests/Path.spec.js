'use strict';
const utils = require("./utils");
const Entity = require("../blobs/Entity");
const Swagger = require("../blobs/Swagger");

let schema = {
    className: "Path",
    call_instance(cls){
        let open_api = new Swagger(null, null);
        let path_instance = new cls("sample_path", open_api);
        path_instance.addMethod("post", [], new Entity({}, {}, open_api));
        return path_instance;
    },
    output: {
        "/sample_path": {
            post: {
                operationId: "post_sample_path"
            }
        }
    }
};

utils.test(schema);