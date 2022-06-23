const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/addressdb'
).then(() =>{
    console.log("Connection Successfull")
}).catch((error) => {
    console.log('something wrong', error);
})