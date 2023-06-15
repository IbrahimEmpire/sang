// const express = require("express")
// const { MongoClient } = require('mongodb');

import  express  from "express";
import { MongoClient } from "mongodb";
import * as dotenv from 'dotenv' 

import { MovieRouter } from "./Routers.js";
import { userRouter } from "./user.js";
import cors from 'cors'




dotenv.config()

const app = express()
app.use(cors())

const PORT = process.env.PORT

//   const URL = "mongodb://127.0.0.1:27017"
   const URL = process.env.URL
 async function mongoConnect(){
        const clint = new MongoClient(URL)
       await clint.connect()
       console.log("mongo is connected")
       return clint
  }

  export const clint = await mongoConnect()

  app.use(express.json())

app.get("/",(req, res)=>{

    res.send("hi welcome all")
})



app.use("/movie", MovieRouter)

app.use("/user", userRouter)
  



  


// console.log(process.env.PORT)

app.listen(PORT,()=> console.log("app is startted", PORT))


