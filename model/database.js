var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var userSchema = new Schema({
	id:{type: Number},
	ap_id:String,
	ip_address:String,
	client_mac:String,
	created_at:String,
	user_agent:String,
	provider:String,
	registration: Boolean,
	splash_page_label:String,
	splash_page_url:String,
	client:
	{
		id:{type: Number},
		email:String,
		first_name:String,
		last_name:String,
		location:String,
		location_latitude:String,
		location_longitude:String,
		created_at:String,
		gender:String,
		city:String,
		country:String,
		country_code:String,
		picture:String,
		logins_count:{type: Number},
		provider:{type: Number},
		birthday:String,
		phone:String,
		client_mac:String,
		last_time_seen:String
	}
});



// the schema is useless so far
// we need to create a model using it
var User = mongoose.model('User', userSchema);

// make this available to our users in our Node applications
module.exports = User;

