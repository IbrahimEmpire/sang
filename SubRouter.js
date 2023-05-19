import { clint } from "./index.js";
import  bcrypt, { genSalt } from "bcrypt"

export async function Allbook(req) {
    return await clint.db("sangeetha").collection("new").find(req.query).toArray();
}
export async function Put(id, newMovie) {
    return await clint.db("sangeetha")
        .collection("new").updateMany({ id: id }, { $set: newMovie });
}
export async function Post(newMovie) {
    return await clint.db("sangeetha").collection("new").insertMany(newMovie);
}
export async function deleted(id) {
    return await clint.db("sangeetha").collection("new").deleteOne({ id: id });
}
export async function getById(id) {
    return await clint.db("sangeetha").collection("new").findOne({ id: id });
}

export async function genPassword(password){
    const salted = await bcrypt.genSalt(10)
    const hashed = await bcrypt.hash(password, salted)
   return hashed
    
}

export async function create(userName, hashed) {
    return await clint.db("sangeetha")
    .collection("users").insertOne({userName: userName, password: hashed});
}

export async function findUser(userName){
    return await clint.db("sangeetha")
    .collection("users").findOne({userName: userName});
}