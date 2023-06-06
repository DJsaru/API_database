const { error } = require('console');
const mongoose = require('mongoose');
const validator = require("validator");



// created a new schema (ksha typech data save kela jail)
const studentSchema = new mongoose.Schema({
    name : {
        type:String,
        required:true,
        minlength:3
    },
    email : {
        type:String,
        required:true,
        unique:[true, "Email is already present"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email")
            }
        }
    },
    phone:{
        type:Number,
        min:10,
        required:true,
        unique:true 
    },
    address:{
        type:String,
        required:true
    }
})

//new collections
const Student = new mongoose.model('Student', studentSchema);

module.exports = Student;