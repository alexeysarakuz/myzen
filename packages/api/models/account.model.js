const mongoose = require('mongoose');

const accountSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  token: { type: String, required: false },
  name: { type: String, required: true },
  surname: { type: String, required: true },

  // roles, rating, about,
});

module.exports = mongoose.model('Account', accountSchema);
