const { Schema, model } = require('mongoose');


const thoughtSchema = new Schema (
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
reactionId: {
  type: Schema.Types.ObjectId,
  default: () => new Types.ObjectId(),
},
reactionBody: {
  type: 'string',
  required: true,
  max_length: 280,
},
username: {
  type: 'string',
  required: true,
},
createdAt: {
  type: Date,
  default: Date.now(),
  // use getter to format timestamp on query.
},
reactionCount: {
  //retrieves the length of the reactions array field on query.
},
}
)



// Schema Settings --
// Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.




const Thought = model('thought', thoughtSchema);

module.exports = Thought;