const assert = require('chai').assert;


function _test(schema) {
    const Cls = schema.classPath?require(schema.classPath):require('../blobs/'+schema.className);
    describe(`${schema.className} ${schema.description?schema.description:""}`, () => {
        let instance;
        if(schema.call_instance){
            instance = schema.call_instance(Cls);
        }else{
            instance = schema.execute(Cls);
        }
        if(schema.verify){
            schema.verify(instance);
        }
        if(instance.serialize && schema.output) {
            let serialized = instance.serialize();
            let q = "<instance>";

            function loopObject(object, serialized_data) {
                for (let k in object) {
                    if (object.hasOwnProperty(k)) {
                        if (typeof object[k] === "object") {
                            q = k;
                            if (object[k] && !serialized_data[k]) {
                                throw new Error("invalid case for key:" + k);
                            }
                            return loopObject(object[k], serialized_data[k]);
                        }
                        it(`Serialized ${schema.className} has ${q}.${k} as provided`, () => {
                            assert.equal(serialized_data[k], object[k]);
                        });
                    }
                }
            }

            loopObject(schema.output, serialized);
        }
    });
}

function test(schema) {
    if(schema instanceof Array){
        for(let scheme of schema){
            _test(scheme);
        }
    }else{
        _test(schema);
    }
}

module.exports = {
    test
};