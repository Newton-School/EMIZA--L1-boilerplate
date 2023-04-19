var mongoose = require("mongoose");
// var Date = require("Date");


/*
Complete your other field here

1. name should be a string and required
2. password should be a string and required
3. role should be a string and it can have only 2 values ('user', 'admin') and default should be user
4. Email which is all ready given.
5. Only non-existing mail are register so you need to complete checkEmailExists function which will return true if emailallready exist.
6. Also Enable timestamps which will store the date of document created and updated.
*/

var userSchema = mongoose.Schema({

  email: {
    type: String,
    required: true,
    validate: {
      async validator(value) {
        const emailexist = await checkEmailExists(User, value);
        return !emailexist;
      },
      message: "Email already exists",
    },
  },
},

{ /* ... */ }

);

const User = mongoose.model("User", userSchema);

//complete this function which is a validator for non-existing email to be register only.

async function checkEmailExists(User, email) {
 
  //Write your code here.

}

module.exports = User;
