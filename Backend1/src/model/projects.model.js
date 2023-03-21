const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    ProjectTitle: {
    type: String,
    required: true
  },
  Description: {
    type: String,
    required: true
  },
  StartDate: {
    type: Date,
    required: true
  },
  EndDate: {
    type: Date,
    required: true
  },
  Status: {
    type: String,
    enum: ['Active', 'Completed', 'Cancelled'],
    default: 'Active'
  },
  ProjectimaageUrl: {
    type: String,
    required: true
  },
//   tasks: [
//     {
//       name: {
//         type: String,
//         required: true
//       },
//       description: {
//         type: String,
//         required: true
//       },
//       startDate: {
//         type: Date,
//         required: true
//       },
//       endDate: {
//         type: Date,
//         required: true
//       },
   
//     }
//   ],
  AssignedTeam:[

  ],
//   createdBy: {
//     type: Schema.Types.ObjectId,
//     ref: 'User'
//   },
  ProjectCreatedAt: {
    type: Date,
    default: Date.now()
  }
});

const ProjectModel = mongoose.model('Project', projectSchema);
module.exports ={ProjectModel}
