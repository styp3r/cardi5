import express from 'express';

import database from './src/firebase.js';
import { ref, onValue } from "firebase/database";

const app = express();

app.get("/:id", (req, res)=>{
    const db = database;
    const starCountRef = ref(db, 'users/'+req.params.id);
    onValue(starCountRef, (snapshot) => {
        if(snapshot.exists()){
            const data = snapshot.val();
            const entries = Object.entries(data);
            res.write("<body style = 'width: 100%; height: 100%; overflow: hidden; background-image: linear-gradient("+data.zcolor+", #ffffff);'></body>");
            res.write("<h3 style = 'display: inline-block; margin-left: 50%; transform: translateX(-50%); margin-top: 10vmax;'>"+data.username+"</h3>");
            for(let i = 0; i < (entries.length-2); i++){
                res.write("<h4 style = 'text-align: center; margin-left: 50%; transform: translateX(-50%); margin-top: 2vmax; width: 30vmin; border-radius: 2vmin ; background-color: #4d94ff; padding: 2vmin;'><a style = 'text-decoration: none; color: #ffffff;' href = "+entries[i][1]+"/>Facebook</h4>");
            }
            res.send();
        }else{
            res.send("ERROR 404");
        }
});   
});

app.listen(4000, ()=>{
    console.log("server started on port 4000");
});