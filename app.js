//Get Tier of application
process.env.TIER = process.env.TIER || 'production';
if (process.env.TIER == "development" || process.env.NODE_ENV == "testing") {
    process.env.DEBUG = process.env.DEBUG || 'app,express:router,express:application,info';
}

const express = require('express');
const config = require(`./config/${process.env.TIER}.json`);
const healthCheck = require('./routes/healthCheck.js');
const user = require('./routes/user.js')

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use('/', healthCheck);
app.use('/api/user', user);
