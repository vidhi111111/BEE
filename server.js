const express = require("express");
const app = express();

// app.get("/profile",(req,res)=>{
//     const {username,age} = req.query; //.laga kr krenge agar add krna hai toh
  
//     console.log(username);
//     //seach username in db put the value of username in localhost
//     res.send("profile page of" + " "+ username + " "+age);
// })

// app.get("/profile/:id",(req,res)=>{
//     const {id} = req.params;
//     console.log(id);
//     res.send("profile page of user" + " " + id )
// })
// app.get("/profile/:id/:username",(req,res)=>{
//     const {id,username} = req.params;
//     console.log(id);
//     console.log(username);
//     res.send("profile page of user" + " " + id + " " + username )
// })
//continue query parameter

let userData = [
    {
        id:1,
        name : " Vidhi",
        address: "Delhi"
    },
    {
        id:2,
        name:"shivi",
        address:"Karnal"
    },
    {
        id:3,
        name:"Riya",
        address:"dehradun"
    }
]
// app.get("/alluser",(req,res)=>{
//     res.send(userData)
// })                         //"iske andar wala route hota hai"
//  app.get("/getuserbyId",(req,res)=>{
//     let {id} = req.query;
//     console.log(id);
//     for(let i = 0; i<userData.length;i++){
//         if(userData[i].id==id){
//             return res.send(userData[i])
//         }


//     }
//     res.send("No user Found")
// })
app.get("/deleteuserbyId",(req,res)=>{
    let {id} = req.query;
    console.log(id);
    for(let i = 0; i<userData.length;i++){
        if(userData[i].id==id){
            userData.splice(i,1);
            return res.send("user deleted")
        }
    }
    res.send("No user found")
})
app.get("/adduser",(req,res)=>{
    const{id,name,address}=req.query;
    let newUser = {
        id:id,
        name:name,
        address:address
    }
    userData.push(newUser);
    res.send("user added")
})
app.listen(5675,()=>{
    console.log("server started...!");
})