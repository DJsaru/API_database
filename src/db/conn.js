const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/sarang').then(() =>{
    console.log(`suceesss`)
}).catch((err) => {
    console.log(`err`);
})