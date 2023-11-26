const { Schema, model } = require('mongoose');


const thoughtSchema = new mongoose.Schema (
  {
thoughtText: {
  type: 'string',
  required: true,
  max_length: 280,
  min_length: 1,
  // must be between 1-280 characters,
},
createdAt: {
  type: Date,
  default: Date.now(),
  // use getter method to format timestamp on query,
},
username: { // of user who created thought.
  type: 'string',
  required: true,
},
reactions: {
  // array of nested documents,
},
}
)

// Schema Settings --
// Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.




const thoughtText = model('thought', ThoughtSchema);

module.exports = Thought;