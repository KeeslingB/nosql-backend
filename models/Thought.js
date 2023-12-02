const { Schema, model, Types } = require('mongoose');



const reactionSchema = new Schema (
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      trim: true,
      required: true,
      max_length: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      default: () => new Date(+new Date() + 84 * 24 * 60 * 60 * 1000),
    },
  },
  {
    toJSON: {
      getters: true,
      vitruals: true,
    }
  }
)


const thoughtSchema = new Schema (
  {
thoughtText: {
  type: String,
  required: true,
  max_length: 280,
  min_length: 1,
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
    virtuals: true,
    getters: true,
  },
  id: false,
}
);

thoughtSchema.virtual('reactionCount').get(function(){
  return this.reactions.length
})

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;