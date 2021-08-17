// To set the node environment to development environment
const env = process.env.NODE_ENV;
console.log("Environment", env);
console.log("All env variables", process.env)
// To declare the path of environment variables based on development or production
switch(env) {
    case 'development':
      require('dotenv').config({
        path: '/Users/rudranshsrivastava/Documents/UserAuth/.env'
      })
    }
console.log(process.env.APP_PORT);
const express = require( "express");
const app = express();
app.use(express.json());
const userrouter = require("./api/users/user.router");
app.use("/api/users",userrouter);


app.get("/api",(req,res)=>{
    res.json({
        success:1,
        message: "This rest api is working"
    });
});

app.listen(3000,()=>{
    console.log('Server Up and running on ',3000);
});
