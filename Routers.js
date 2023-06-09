import  express  from "express";
const Router = express.Router()
import { Allbook, getById, deleted, Post, Put } from "./SubRouter.js";
import { auth } from "./auth.js";


// Get All Movies
Router.get("/", async(req,res)=>{
    const { rating, language} = req.query

    if(req.query.rating){
        req.query.rating = +req.query.rating
    }
const movie = await Allbook(req);
res.send(movie)
})

// Movie Get BY Id

Router.get("/:id", async(req, res)=>{
const { id } = req.params

const movie = await getById(id)
movie ? res.status(200).send(movie) : res.status(400).send({message: "movie is not found"})
})


// Delete By Id

Router.delete("/:id", async (req, res)=>{
    const { id } = req.params
    const movie = await deleted(id)
    res.send(movie)
})

Router.post("/", async(req, res)=>{
const newMovie = req.body;
const result = await Post(newMovie)
res.send(result)  
})


// Update By Id

Router.put("/:id", async(req, res)=>{
const {id} = req.params
const newMovie = req.body
const result = await Put(id, newMovie)
res.send(result)  
})

export const MovieRouter = Router