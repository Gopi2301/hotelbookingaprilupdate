import express from 'express';

const router = express.Router();

router.get("/", (request, response)=>{
    response.send("Hello this Auth endpoint")
})

router.get("/register", (request, response)=>{
    response.send("Hello this Register endpoint")
})


export default router;