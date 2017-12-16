'use strict';
const utils = require("./utils");


let schema = {
    className: "Tag",
    call_instance(cls){
        return new cls("sample-tag", "sample-tag-description")
    },
    output: {
        name: "sample-tag",
        description: "sample-tag-description"
    }
};

utils.test(schema);