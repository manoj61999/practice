const service = require("./service");
const fs = require("fs");

let registration  = async(req,res) =>{
try{
  let savedata = await service.saveData(req.body);
  if(savedata){
      res.send("Success");
  }
  else{
      res.send("Failure")
  }
}catch(err){
    return false
}
}

let login  = async(req,res) =>{

let getusers = await service.getUserDetails({email:req.body.email});

if(getusers.length>0){
    if(req.body.password==getusers[0].password){
        res.send("login Success")
    }
    else{
        res.send("login Failure")
    }
}
else{
    res.send("no user found")
}
  }


  let getUsers = async(req,res) => {

    fs.readFile('read.txt', function (err, data) {
        if (err){

           console.log("error")
        } 
        else{
           res.send(JSON.parse(data))
        } 
        
     });
    }

     let getdetails = async(req,res) =>{

        let getusers = await service.getUserDetails({email:req.body.email});
        
       res.send({"data":getusers})
          }



    


module.exports={
    registration,
    login,
    getUsers,
    getdetails
  
}