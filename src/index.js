const express = require("express")
const {json} = require("express")
const connect = require("./config/dataBase")
const todoRoute = require("./routes/todoRoute")
connect()
const app = express()
app.use(json())
app.use("/tasks",todoRoute);
const PORT  = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`server started on port ${PORT}`)
})