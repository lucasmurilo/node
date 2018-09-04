const express = require('express');
const requireDir = require('require-dir');

const routes = express.Router();

const controllers = requireDir('./controllers');

console.log(controllers);

routes.post('/signup',controllers.authControllers.signup);

module.exports = routes;