'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const registrationSchema = mongoose.Schema({
    "firstname":String,
	"lastname":String,
	"email":String,
	"password":String,
	"phone":String,
    "dob":String
  }); 

  const model = mongoose.model('registration',registrationSchema);

  let saveData = async(data)=>{
    try {
        const user = new model(data);
        const savedata = await user.save();
        return savedata;
    } catch(err){
        return false
    }

}

let getUserDetails = async(data)=>{
try{
  let  getusers = await model.find({})
    return getusers
    }catch(err){
        return false
    }

}


module.exports={
    saveData,
    getUserDetails

};
