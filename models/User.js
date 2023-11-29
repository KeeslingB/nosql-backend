// const mongoose = require('mongoose');
const { Schema, model } = require('mongoose');





const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,  // might need revision when testing routes later on.
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: function (v) {
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
        },
        message: 'Not a Valid Email!' //will need to add validation for email.
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId, 
        ref: 'thought',
      }
    ], 
    friends: [
       { type: Schema.Types.ObjectId, 
        ref: 'user'
      },
    ],
    // toJSON:{
    //   virtuals: true,
    // },
    // id: false,
  }}
)

userSchema.virtual('friendCount').get(function(){
  return this.friends.length
})



// Schema Settings--
// Create a virtual called friendCount that retrieves the length of the user's friends array field on query.



const User = model('user', userSchema);

module.exports = User;
