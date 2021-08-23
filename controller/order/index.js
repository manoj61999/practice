const service = require("./service");

let Order = async(req,res)=>{
try{
let SaveData = await service.SaveData(req.body);
if(SaveData){
    res.send("order placed");
}else{
    res.send("order details fail to save ")
}
}catch(err){
    return false
}
}

let OrderDetails = async(req,res)=>{
    let Orderdata = await service.ViewOrder({orderid:req.body.orderid});
    if( Orderdata.length>0){
        if(req.body.productname==Orderdata[0].productname){
            res.send("success");
        }else{
            res.send("invalid productname");
        }
    }else{
        res.send("no OrderID")
    }
}

let OrderReview = async(req,res)=>{
    let Orderdata = await service.ViewOrder({orderid:req.body.orderid});
    res.send({"data":Orderdata});
}









module.exports={
    Order,
    OrderDetails,
    OrderReview

};