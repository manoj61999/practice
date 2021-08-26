let Addition = (req,res)=>{
    let a = req.body.firstNumber;
    let b = req.body.secondNumber;
    let AddResult = parseInt(a) + parseInt(b);
    res.send({"Result":AddResult});
    }

    let Subraction = (req,res)=>{
        let a = req.body.firstNumber;
        let b = req.body.secondNumber;
        let SubResult = parseInt(a) - parseInt(b);
        res.send({"Result":SubResult});
        }
        
    let Multiplication = (req,res)=>{
        let a = req.body.firstNumber;
        let b = req.body.secondNumber;
        let MultiResult = parseInt(a) * parseInt(b);
        res.send({"Result":MultiResult});
    }
    let Division = (req,res)=>{
        let a = req.body.firstNumber;
        let b = req.body.secondNumber;
        let DiviResult = parseInt(a) / parseInt(b);
        res.send({"Result":DiviResult});
    }






module.exports={
    Addition,
    Subraction,
    Multiplication,
    Division

};
