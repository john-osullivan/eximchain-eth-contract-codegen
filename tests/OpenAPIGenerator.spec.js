'use strict';
const utils = require("./utils");
const fs = require("fs");
const assert = require('chai').assert;

let schema = [
    {
        className: "OpenAPIGenerator",
        classPath: "../OpenAPIGenerator",
        call_instance(cls){
            let generator = new cls("./tests/samples/test_config.json");
            generator.init();
            generator.process();
            return generator;
        },
        verify: function(instance){
            it(`Generated swagger output matches the sample output file content`, () => {
                assert.equal(
                    JSON.stringify(instance.openAPI.serialize(), null, 4),
                    JSON.stringify(JSON.parse(fs.readFileSync("./tests/samples/test_output.json")), null, 4),
                );
            });
        },
    }
];

utils.test(schema);