const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = mongoose.Schema({
    "productname":String,
	"productid":String,
	"email":String,
	"customerid":String,
	"phone":String,
    "address":String
  }); 
  const model = mongoose.model('product',productSchema);

  let saveData =async(data)=>{
      try{
      const pro = new model(data);
      const saveData = await pro.save();
      return saveData;
      } catch(err){
          return false
      }
  }

  let  getProDetails= async(data)=>{
    try{
      let  viewDetails = await model.find({});
        return viewDetails
        }catch(err){
            return false
        }
    
    }









  module.exports={
    saveData,
    getProDetails

};