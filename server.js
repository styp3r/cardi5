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
            console.log(data.username);
            for(let i = 0; i < (entries.length-1); i++){
                res.write("<h4 style = 'width: 30vmin; border-radius: 2vmin ; background-color: #4d94ff; padding: 2vmin;'><a style = 'text-decoration: none; color: #ffffff;' href = "+entries[i][1]+">Facebook</a></h4>");
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