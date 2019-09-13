const mongoose = require('mongoose');

const accountSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  price: Number,
});

module.exports = mongoose.model('Account', accountSchema);
