const mongoose = require('mongoose');

const feedSchema = new mongoose.Schema({
  description: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
  author: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  likes: {
    type: Number,
    default: 0
  },
  comments: [{
    body: {
      type: String,
    },
    author: {
      type: String,
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  }]
});

const FeedsModel = mongoose.model('Feed', feedSchema);

module.exports = {FeedsModel};
