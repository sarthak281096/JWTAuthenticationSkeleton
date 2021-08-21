'use strict';

const request = {
    "name" : "",
    "contact" : "",
    "address" : "",
    "gender" : "",
    "country" : ""
}
const schema = {
    "type" : "object",
    "additionalPropertiess" : true,
    "properties" : {
        "name" : {
            "type": "string",
            "optional": false
        },
        "contact" : {
            "type": "string",
            "optional": false
        },
        "address" : {
            "type": "string",
            "optional": false
        },
        "gender" : {
            "type": "string",
            "optional": false
        },
        "country" : {
            "type": "string",
            "optional": false
        }
    }
}
module.exports.schema = schema;
module.exports.json = request;