'use strict';
const utils = require("./utils");
const fs = require("fs");
const assert = require('chai').assert;

let schema = [
    {
        className: "SwaggerServiceGenerator",
        classPath: "../SwaggerServiceGenerator",
        call_instance(cls){
            let generator = new cls("./tests/samples/test_config.json");
            generator.init();
            generator.process("./eth_connector");
            return generator;
        },
        verify: function(instance){
            for(let service_file_tag in instance.service_files_code){
                if(instance.service_files_code.hasOwnProperty(service_file_tag)){
                    let service_file_name = service_file_tag.replace(service_file_tag[0], service_file_tag[0].toUpperCase());
                    it(`Generated Swagger Service file "${service_file_name}"Service.js matches the sample output file contents`, () => {
                        assert.equal(
                            instance.service_files_code[service_file_tag],
                            fs.readFileSync(`./tests/samples/swagger_service/${service_file_name}Service.js`)
                        );
                    });
                }
            }
        },
    }
];

utils.test(schema);