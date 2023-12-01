// const mongoose = require('mongoose');
// const router = require('express').Router();
const { Schema, model } = require('mongoose');





const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,  
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: function (v) {
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
        },
        message: 'Not a Valid Email!'  
      },
    },
      thoughts: [
        {
          type: Schema.Types.ObjectId,
          ref: "Thought",
        }
      ],
      friends: [
        {
          type: Schema.Types.ObjectId,
          ref: 'User'
        },
      ],
    },
  {
    toJSON: {
      virtuals: true
    }
  }
)

userSchema.virtual('friendCount').get(function () {
  return this.friends.length
})





const User = model('User', userSchema);

module.exports = User;