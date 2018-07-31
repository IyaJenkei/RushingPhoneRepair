﻿var express = require('express');
var passport = require('passport');
var Strategy = require('passport-local').Strategy;
var crypto = require('crypto-aes192');
const User = require('./models/usermodels');


// Configure the local strategy for use by Passport.
//
// The local strategy require a `verify` function which receives the credentials
// (`username` and `password`) submitted by the user.  The function must verify
// that the password is correct and then invoke `cb` with a user object, which
// will be set at `req.user` in route handlers after authentication.
passport.use(new Strategy(
	function (username, password, cb) {
		let currentUser = User.findOne({ email: username });
		if (currentUser && currentUser.password === password) {
			return cb(null, currentUser);
		}
		return cb(null, false);
	}));

// Configure Passport authenticated session persistence.
//
// In order to restore authentication state across HTTP requests, Passport needs
// to serialize users into and deserialize users out of the session.  The
// typical implementation of this is as simple as supplying the user ID when
// serializing, and querying the user record by ID from the database when
// deserializing.

const algorithm = 'aes-256-ctr';
const salt = '5482793';


passport.serializeUser(function (user, cb) {
	let userdata = {
		id: currentUser.id
	};

	var cipher = crypto.createCipher(algorithm, salt)
	var crypted = cipher.update(userdata, 'utf8', 'hex')
	crypted += cipher.final('hex');
	cb(null, crypted);
});

passport.deserializeUser(function (id, cb) {
	let decipher = crypto.createDecipher(algorithm, salt)
	let userdata = decipher.update(id, 'hex', 'utf8')

	User.findById(userdata.id, function (err, user) {
		if (err) { return cb(err); }
		cb(null, user);
	});
});

module.exports = { passport }