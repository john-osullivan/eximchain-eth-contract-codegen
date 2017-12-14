/**
 * @class
 * @classdesc Parameter class
 * */
class Parameter{

    /**
     * @constructor
     * @param {String} name - name of the parameter
     * @param {String} type - param type
     * @param {String} schema - send schema instead of param if it is a custom type
     * */
    constructor(name, type, schema){
        this.name = name;
        this.type = type;
        this.schema = schema;
    }

    /**
     * @function
     * @instance
     * @description serializes stuff
     * */
    serialize(){
        let json = {};
        json.name = this.name;
        if(this.schema){
            json.schema = {
                $ref: '#/definitions/'+this.schema
            };
        }else{
            json.type = this.type;
        }
        return json;
    }

}
module.exports = Parameter;
