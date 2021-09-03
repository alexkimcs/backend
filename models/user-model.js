// require the mongoose package from the connection pool
const mongoose = require('../db/connection');

// make a user schema
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    default: "Guest",
},
  email: String,
});

// instantiate the model with the schema
const User = mongoose.model('User', UserSchema);

// export the model
module.exports = User;