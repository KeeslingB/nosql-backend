const { Schema, model } = require('mongoose');


const thoughtSchema = new Schema (
  {
thoughtText: {
  type: String,
  required: true,
  max_length: 280,
  min_length: 1,
  // must be between 1-280 characters,
},
createdAt: {
  type: Date,
  default: Date.now(),
  default: () => new Date(+new Date() + 84 * 24 * 60 * 60 * 1000),
  // get: time => helper(time)
  // use getter method to format timestamp on query,
},
username: { // of user who created thought.
  type: 'string',
  required: true,
},
reactions: [
  // array of nested documents, made with reaction schema model
],
}
)


thoughtSchema.virtual('reactionCount').get(function(){
  return this.reactions.length
})


// reactionId: {
//   type: Schema.Types.ObjectId,
//   default: () => new Types.ObjectId(),
// },
// reactionBody: {
//   type: 'string',
//   required: true,
//   max_length: 280,
// },
// username: {
//   type: 'string',
//   required: true,
// },
// createdAt: {
//   type: Date,
//   default: Date.now(),
//   // use getter to format timestamp on query.
// },

// Schema Settings --
// Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.




const Thought = model('thought', thoughtSchema);

module.exports = Thought;