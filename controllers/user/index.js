
const createUserSchema = require('./../../models/CreateUserRequest').schema;
const jwt = require('jsonwebtoken');

let createUser = function (req, res){
    let data = req.body;
    try {
        const query = `Insert into `  
    }catch{

    }
}

module.exports.createUser = createUser;