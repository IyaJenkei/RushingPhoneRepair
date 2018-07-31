const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const User = require('./models/usermodels');
const Service = require('./models/servicemodels');
const Router = express.Router();
const mypassport = require('./passport');


Router.use(function (req, res, next) {
	console.log(req.method, req.url);
	next();
});

Router.post('/signup', function (req, res) {
	let user = req.body;
	console.log(user);
	User.create(user);
	res.json('hello');
});

Router.post('/login', function (req, res) {
	passport.authenticate('local', { failureRedirect: '/login' });
	let user = req.body;
	username = user.email;
	password = user.password;
	console.log(user);
	res.json(username + password);
	res.redirect('/');
});

Router.post('/service', function (req, res) {
	let servicerendered = req.body;
	let Service = mongoose.model('Service', servicemodels.serviceSchema);
	res.json('hello');
});

module.exports = Router;