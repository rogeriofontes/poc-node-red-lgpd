var bcrypt = require('bcrypt');

var salt = bcrypt.genSaltSync(8);

// Salt and hash password
var passwordFromUser = process.argv[0];
var passwordToSave = bcrypt.hashSync(passwordFromUser, salt)

console.log(passwordToSave);
