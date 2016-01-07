var express = require('express');
var app = module.exports = express();
app.set('views', 'C:/Users/Edward Jimenez/Documents/GitHub/ConectorTanaza/OnLive/templates');
app.set('view engine', 'ejs');


var User = require('../../../model/database');

app.get('/byDate', function(req, res) {
	User.find().sort( { "client.last_time_seen": -1 } ).exec(function(err, results) {
			res.render('main', {
				usuarios: results.map(function(sampleUser) {
					return sampleUser.client.first_name;
				})
			});	
	});
});


app.get('/bySplashPage', function(req, res) {
	User.find({"splash_page_label": req.param('splash')}).exec(function(err, results) {
			res.render('main', {
				usuarios: results.map(function(sampleUser) {
					return sampleUser.client.first_name;
				})
			});	
	});
});

app.get('/byAp', function(req, res) {
	User.find({"ap_id": req.param('Ap')}).exec(function(err, results) {
			res.render('main', {
				usuarios: results.map(function(sampleUser) {
					return sampleUser.client.first_name;
				})
			});	
	});
});


app.get('/byEmail', function(req, res) {
	User.find({"client.email": req.param('Email')}).exec(function(err, results) {
			res.render('main', {
				usuarios: results.map(function(sampleUser) {
					return sampleUser.client.first_name;
				})
			});	
	});
});
