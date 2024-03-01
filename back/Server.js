const express=require('express');
const app=express();
const mongoose=require('mongoose');
const cors=require('cors');
const PORT = 5000;
const SiginUp =require('./Models/Sigup.js')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//connect mongoose
mongoose.connect(`mongodb+srv://tharun:Omsairam2003@cluster0.fisjfgs.mongodb.net/siginup?retryWrites=true&w=majority`,{useNewUrlParser: true,useUnifiedTopology:true }
).then(()=>console.log("dbconnnected")).catch((err)=>console.log(err))

app.post("/signup",(req,res)=>{
    const { Email , Password } = req.body;
    try{
        console.log(Email,Password);
        SiginUp.create({
            Email:Email,
            Password:Password,
        })
        res.send({create: "true"});

    }
    catch (e){
        console.log(e);
    }
})

app.listen(PORT,()=>{
    console.log("server started")
})