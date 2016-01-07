var express = require('express');
var app = module.exports = express();

var User = require('../../../model/database');

app.post('/', function(req, res) {
	req.on('data', function (chunk) {
		var jsonBody = JSON.parse(chunk);
		registerLogin(jsonBody);		
	});
});

var registerLogin = function(jsonBody)
{
	var counterUser;
	for (counterUser in jsonBody) {
		var user = new User({
		id:jsonBody[counterUser]["id"],
		ap_id:jsonBody[counterUser]["ap_id"],
		ip_address:jsonBody[counterUser]["ip_address"],
		client_mac:jsonBody[counterUser]["client_mac"],
		created_at:jsonBody[counterUser]["created_at"],
		user_agent:jsonBody[counterUser]["user_agent"],
		provider:jsonBody[counterUser]["provider"],
		registration: jsonBody[counterUser]["registration"],
		splash_page_label:jsonBody[counterUser]["splash_page_label"],
		splash_page_url:jsonBody[counterUser]["splash_page_url"],
		client:
			{
			id:jsonBody[counterUser]["client"]["id"],
			email:jsonBody[counterUser]["client"]["email"],
			first_name:jsonBody[counterUser]["client"]["first_name"],
			last_name:jsonBody[counterUser]["client"]["last_name"],
			location:jsonBody[counterUser]["client"]["location"],
			location_latitude:jsonBody[counterUser]["client"]["location_latitude"],
			location_longitude:jsonBody[counterUser]["client"]["location_longitude"],
			created_at:jsonBody[counterUser]["client"]["created_at"],
			gender:jsonBody[counterUser]["client"]["gender"],
			city:jsonBody[counterUser]["client"]["city"],
			country:jsonBody[counterUser]["client"]["country"],
			country_code:jsonBody[counterUser]["client"]["country_code"],
			picture:jsonBody[counterUser]["client"]["picture"],
			logins_count:jsonBody[counterUser]["client"]["logins_count"],
			provider:jsonBody[counterUser]["client"]["provider"],
			birthday:jsonBody[counterUser]["client"]["birthday"],
			phone:jsonBody[counterUser]["client"]["phone"],
			client_mac:jsonBody[counterUser]["client"]["client_mac"],
			last_time_seen:jsonBody[counterUser]["client"]["last_time_seen"]
			}
		});
		user.save(function(err) {
		  if (err) throw err;

		  console.log('User saved successfully!');
		});
	}
}


var getTanazaLoginProviderName = function (providerId) {
	switch(providerId)
	{
		case 1:
			return "google";
		case 2:
			return "linkedin";
		case 3:
			return "facebook";
		case 4:
			return "twitter";
		case 5:
			return "instagram";
		case 6:
			return "live";
		case 7:
			return "tanaza-click";
		case 8:
			return "tanaza-email";
		case 9:
			return "tanaza-phone";
		case 10:
			return "tanaza-emailphone";
		case 11:
			return "tanaza-code";
		default:
			return "unknown";
	}
}
