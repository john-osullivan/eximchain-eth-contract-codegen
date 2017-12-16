'use strict';
const utils = require("./utils");
const License = require("../blobs/License");

let schema = {
    className: "Info",
    call_instance(cls){
        return new cls("info", "info-description", new License("license-name", "license-url"), "2.5.1");
    },
    output: {
        title: "info",
        description: "info-description",
        version: "2.5.1",
        license: {
            name: "license-name",
            url: "license-url"
        }
    }
};

utils.test(schema);