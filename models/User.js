const { Schema, model } = require('mongoose');


const userSchema = new Schema(
  {
    username: {
      type: 'string',
      unique: true,
      required: true,
      trim: true,  // might need revision when testing routes later on.
    },
    email: {
      type: 'string',
      required: true,
      unique: true,
      //will need to add validation for email.
    },
    thoughts: {
      // array of _id values refferencing the Thought model.
    },
    friends: {
      //array of _id values refferencing the User model (self refferences).
    },
    friendCount: {
      virtuals: true, // will need to be gone over as im sure this part is wrong.
    }
  }
)

// Schema Settings--
// Create a virtual called friendCount that retrieves the length of the user's friends array field on query.



const User = model('user', userSchema);

module.exports = User;
