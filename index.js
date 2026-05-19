const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/User");
const dns=require("dns");
dns.setServers(['8.8.8.8', '1.1.1.1']);
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const app = express();
app.use(express.json());

mongoose.connect("mongodb+srv://Yuga:aitam@cluster0.g3c3b9z.mongodb.net/?appName=Cluster0")

.then(()=>{
    console.log("mongodb connected");
})

.catch((err)=>{
    console.log(err);
});

app.get("/",(req,res)=>{
    res.send("Hello");
});



app.post("/students/add",async(req,res)=>{

try{

const user = new User(req.body);

await user.save();

res.send(user);
 
}catch(err){
res.send(err)
}
});
app.get("/users", async (req,res)=>{

    const users = await User.find();

    res.send(users);

});
app.get("/students",async(req,res)=>{
try{

    const user = await User.find();

    res.send(user);

}catch(err){
    console.log(err)
}
})



app.get("/students/:id",async(req,res)=>{

    try{
   

        const user = await User.findById(req.params.id);
       res.send(user);
        


    }catch(err){
    console.log(err)
}
})

app.put("/students/update/:id", async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id, 
            req.body, 
            { new: true }
        );
        res.send(updatedUser);
    } catch (err) {
        res.status(500).send(err);
    }
});
app.delete("/students/delete/:id",async(req,res)=>{

    const user = await User.findByIdAndDelete(req.params.id);

    res.send(user);

})


app.post("/register",async(req,res)=>{
    try {
        const {name,email,password} = req.body;
        const userExists = await User.findOne({ email })
        if(userExists){
            return res.end("User already in db");
        }
        const hashpassword = await bcrypt.hash(password,13);
        console.log("hashedPassword",hashpassword);

        const user = new User({
            name,
            email,
            password:hashpassword
        })
        await user.save();
        res.send(user);
    }catch(err){
        console.log(err);
        res.send(err);
    }
})
app.post("/login", async (req,res)=>{

    try{
    const {email,password} = req.body;
    const user = await User.findOne({email});
    if(!user){
    return res.send("User not found");
    }
    const isMatch = await bcrypt.compare(
            password,
            user.password
        );
    if(!isMatch){
    return res.send("Invalid credentials");

        }

       
        const token = jwt.sign(

            {id:user._id},

            "secretkey",

            {expiresIn:"1h"}

        );

       
        res.send({

            message:"Login successful",

            token

        });

    }catch(err){

        console.log(err);

        res.status(500).send(err.message);

    }

});
app.listen(4000, () => {
    console.log("server started");
});

