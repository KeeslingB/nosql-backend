const { Schema, model } = require('mongoose');


const UserSchema = newSchema (
  {
    type: 'string',
    unique: true,
    required: true,
    // trimmed  
  }
)



const username = model('username', usernameSchema);

module.exports = Username;
