import jwt from "jsonwebtoken";

export const auth = (req , res , next) =>{
    const token = req.headers.authorization?.split(" ")[1];
  if(!token){
    return res.status(401).json({message : "no token provided"})
  }

  try{
      const decoded = jwt.verify(token , process.env.JWT_SECRET);
      req.user = decoded;
      next();
  }
  catch(e){
     if (e.name === "TokenExpiredError") {
    return res.status(401).json({ message: "Token expired" });
  }
  return res.status(401).json({ message: "Invalid token" });
  }
}