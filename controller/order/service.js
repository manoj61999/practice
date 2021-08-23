const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = mongoose.Schema({
    "orderid": String,
    "productname": String,
    "productquantity": Number,
    "productprice": Number,
    "totalprice": Number,
    "address": String
});
const model = mongoose.model('Orders',OrderSchema);

let SaveData = async(data)=>{
try{
const Orders = new model(data);
const savedata = await Orders.save();
return savedata;
} catch(err){
    return false
}
}

let ViewOrder = async(data)=>{
    try{
    const Orderdata = await model.find({});
    return Orderdata;
}catch(err){
    return false
}
}







module.exports={
    SaveData,
    ViewOrder
};


