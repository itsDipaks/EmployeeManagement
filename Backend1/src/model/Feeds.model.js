const mongoose = require('mongoose');

const feedSchema = new mongoose.Schema({
  Massage: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
  feedAuthor: {
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
    CommentMasg: {
      type: String,
    },
    CommentAuthor: {
      type: String,
    },
    AutherEmail: {
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
