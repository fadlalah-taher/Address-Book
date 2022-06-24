const User = require('../model/User');
// const User = require('../model/Contact');
// const Contact = require('../model/Contact');

async function getUsers() {
    return await User.find();
  }
  
  async function getById(id) {
    return await User.findById(id);
  }

async function addUser(body, hashPassword) {
    const {
      name,
      email,
    } = body;
  
    const user = new User({
      name,
      email,
      password: hashPassword
    });
  
    return await user.save();
}

// async function addContact(body, user){
//   const {
//     name,
//     email,
//     number,
//     relationStatus,
//     location
//   } = body;
//   const user = new Contact({
//     name,
//     email,
//     number,
//     relationStatus,
//     location
//   });

// }

async function getByEmail(email) {
    return await User.findOne({
      email
    });
  }

module.exports = {addUser, getByEmail, getById, getUsers}