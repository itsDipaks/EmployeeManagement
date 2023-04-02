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
    type: String,
    required: true
  },
  EndDate: {
    type: String,
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
  ProjectType: {
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

groupleader: {
  type: String,
  required: true
},
  ProjectCreatedAt: {
    type: Date,
    default: Date.now()
  }
});

const ProjectModel = mongoose.model('Project', projectSchema);
module.exports ={ProjectModel}
