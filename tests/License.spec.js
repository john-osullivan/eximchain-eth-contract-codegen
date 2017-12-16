'use strict';
const utils = require("./utils");


let schema = {
    className: "License",
    call_instance(cls){
        return new cls("sample", "sample-url")
    },
    output: {
        name: "sample",
        url: "sample-url"
    }
};

utils.test(schema);