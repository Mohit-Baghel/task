const express= require('express');
const app=express();


require('dotenv').config();

const userRouter=require('./api/users/user.router');


app.use(express.json()) 
app.use(express.urlencoded({ extended: true })) 

app.use("/api/users",userRouter);







app.listen(process.env.APP_PORT,()=>console.log('express server is running at port number :',process.env.APP_PORT));
