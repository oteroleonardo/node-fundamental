var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var customerSchema = new Schema({
  name: String,
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  premium: Boolean,
  location: String,
  meta: {
    age: Number,
    website: String
  },
  created_at: Date,
  updated_at: Date
});

// the schema is useless so far
// we need to create a model using it
var Customer = mongoose.model('Customer', userSchema);
// make this available to our customer in our Node applications
module.exports = Customer;