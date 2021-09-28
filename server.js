import express from 'express';

const app = express();

app.get("/", (req, res)=>{
    res.send("hello from the server!");
});

app.listen(4000, ()=>{
    console.log("server started on port 4000");
});