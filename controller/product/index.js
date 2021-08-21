let service = require("./service")

let product = async(req,res)=>{
    try{
    let saveData= await service.saveData(req.body);
    if(saveData){
        res.send("thankyou! Succefully submitted");
    }else{
        res.send("check your details")
    }
} catch(err){
    return false
}
}

let viewProduct = async(req,res) =>{
    let viewDetails = await service.getProDetails({email:req.body.email});

    if(viewDetails.length>0){
        if(req.body.customerid==viewDetails[0].customerid){
            res.send("welcome!")
        }
        else{
            res.send("invalid customerID")
        }
    }else{
        res.send("no user found")
    }
      }

      let viewpro = async(req,res) =>{
        let viewDetails = await service.getProDetails({email:req.body.email});

        res.send({"data":viewDetails})
      }

          


module.exports={
    product,
    viewProduct,
    viewpro
    
};
