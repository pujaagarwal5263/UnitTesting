import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/jestTesting").then(()=>{
    console.log("Database Connected Successfully");
}).catch((err:any)=>{
    console.log("No Connection to Database");
})