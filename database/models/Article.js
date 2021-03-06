const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  uuid: { type: String, required: true },
  topic: { type: String, required: true },
  date: { type: Date, default: Date.now() },
  countryCode: { type: String, uppercase: true, minLength: 2, maxLength: 2 },
  stateCode: { type: String, uppercase: true, minlength: 2, maxlength: 35 },
  title: String,
  text: String,
  url: String
});

module.exports = mongoose.model('Article', articleSchema);