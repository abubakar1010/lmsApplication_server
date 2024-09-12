import connectToDb from "./db/dbConnection.js"
import express from 'express';
import config from 'dotenv/config';
const app = express()



connectToDb()
.then( () => {
    // app.get("/",(_,res) => {
    //     res.send("<h1>thanks for response</h1>")
    // })
    app.listen(process.env.PORT,() => {
        console.log(`app is listening on port ${process.env.PORT}`);
        
    })
})
.catch( (error) => {
    console.log(error);
    
})
