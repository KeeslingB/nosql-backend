const mongoose = require('mmongoose');
const { Schema, model } = require('mongoose');





const userSchema = new Schema(
  {
    username: {
      type: 'string',
      unique: true,
      required: true,
      trimmed: true,  // might need revision when testing routes later on.
    },
    email: {
      type: 'string',
      required: true,
      unique: true,
      validate: {
        validator: function (v) {
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
        },
        message: 'Not a Valid Email!' //will need to add validation for email.
    },
    thoughts: {
      references: [{ type: Schema.Types.Objectid, ref: 'thought'}], //lost?
      // array of _id values refferencing the Thought model.
    },
    friends: {
      references: [{ type: Schema.Types.Objectid, ref: 'user'}],
      //array of _id values refferencing the User model (self refferences).
    },
    toJSON:{
      virtuals: true,
    },
    id: false,
    friendCount: {
      virtuals: true,
       // will need to be gone over as im sure this part might be wrong.
    }
  }}
)

// Schema Settings--
// Create a virtual called friendCount that retrieves the length of the user's friends array field on query.



const User = model('user', userSchema);

module.exports = User;
