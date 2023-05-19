import  express  from "express";
import {create,  findUser,  genPassword } from "./SubRouter.js";
import  bcrypt from "bcrypt"
import  Jwt  from "jsonwebtoken";
const Router = express.Router()


Router.post("/signup", async(req, res)=>{
    const {userName, password} = req.body;
   
   
    const isUser = await findUser(userName)
    if(isUser){
        res.status(500).send({message: "userName already taken "})
        return
    }
    if(!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/g.test(password)){
        res.status(500).send({message : "password to low"})
    }
    const hashed = await genPassword(password)
    const result = await create(userName, hashed)
    res.send(result)  
   
    })
    
    Router.post("/login", async(req, res)=>{
        const {userName, password} = req.body;
       
       
        const isUserfromDb = await findUser(userName)
        if(!isUserfromDb){
            res.status(500).send({message: "invalid user name "})
            return
        }
        const storedPassword = isUserfromDb.password
        const isPassword = await bcrypt.compare(password, storedPassword)
        if(!isPassword){
            res.status(400).send({message: "incorrect password"})
            return
        }
        const token = await Jwt.sign({id: isUserfromDb._id}, process.env.KEY)
        res.send({message: "sucess login", token: token})  
       
        })



    

export const userRouter = Router