const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  },
  status: {
    type: String,
    enum: ['active', 'completed', 'cancelled'],
    default: 'active'
  },
  tasks: [
    {
      name: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      startDate: {
        type: Date,
        required: true
      },
      endDate: {
        type: Date,
        required: true
      },
      status: {
        type: String,
        enum: ['not started', 'in progress', 'completed'],
        default: 'not started'
      },
    }
  ],
  AssignedTeam:[
  ],
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
