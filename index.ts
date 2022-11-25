import express from "express";
import routes from "./src/router/routes";
require("./db-connection")

const app=express();

app.use(express.json())
app.use(routes);

app.listen(3000,()=>{
    console.log("Server is running");
})

export default app;