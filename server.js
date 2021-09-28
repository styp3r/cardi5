import express from 'express';

import database from './src/firebase.js';
import { ref, onValue } from "firebase/database";

const app = express();

app.get("/", (req, res)=>{
    res.send("hello from the server!");
});

app.get("/:id", (req, res)=>{
    const db = database;
    const starCountRef = ref(db, 'users/'+req.params.id);
    onValue(starCountRef, (snapshot) => {
        if(snapshot.exists()){
            const data = snapshot.val();
            const entries = Object.entries(data);
            res.send("<h1>"+entries+"</h1>");
        }else{
            res.send("ERROR 404");
        }
});   
});

app.listen(4000, ()=>{
    console.log("server started on port 4000");
});