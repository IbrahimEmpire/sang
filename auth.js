import  Jwt  from "jsonwebtoken";

export const auth =(req, res, next)=>{
   try {
    const token = req.header("x-auth-token")
    Jwt.verify(token, process.env.Key)
    next()
   } catch (error) {
    res.status(500).send("token invalid")
   }
}