const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reactions');

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
},
username: { 
  type: 'string',
  required: true,
},
reactions: [ reactionSchema ],
},
{
  toJSON:{
    virtuals: true
  }
}
);

thoughtSchema.virtual('reactionCount').get(function(){
  return this.reactions.length
})

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;