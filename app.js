const express=require('express')
const app=express();
app.use(express.json())
const PORT=process.env.PORT||5000
app.get('/',(req,res)=>{
    res.send("Welcome to NodeJS app")
})
app.listen(PORT,()=>{
    console.log("App running on 5000");
})