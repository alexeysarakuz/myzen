const mongoose = require('mongoose');

const freelancersSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  account_id: { type: mongoose.Schema.ObjectId, required: true },
  tags: { type: Array, required: false },
  rating: { type: Number, required: false },
  // roles, rating, about,
});

module.exports = mongoose.model('Freelancers', freelancersSchema);
