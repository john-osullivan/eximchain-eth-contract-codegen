const assert = require('chai').assert;


function test(schema) {
    const Cls = require('../blobs/'+schema.className);
    describe(`${schema.className} ${schema.description?schema.description:""}`, () => {
        let instance = schema.call_instance(Cls);
        let serialized = instance.serialize();
        let q = "<instance>";
        function loopObject(object, serialized_data) {
            for (let k in object) {
                if (object.hasOwnProperty(k)) {
                    if(typeof object[k] === "object"){
                        q = k;
                        return loopObject(object[k], serialized_data[k]);
                    }
                    it(`Serialized ${schema.className} has ${q}.${k} as provided`, () => {
                        assert.equal(serialized_data[k], object[k]);
                    });
                }
            }
        }
        loopObject(schema.output, serialized);
    });
}

module.exports = {
    test
};