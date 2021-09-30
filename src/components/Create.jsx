import React from 'react';
import {useState} from 'react';
import GenerateLinks from './GenerateLinks';

function Create(){

  
  const [count, setCount] = useState(1);
 
  /* Pull Function
  function readUserData(){
    const db = database;
    const starCountRef = ref(db, 'users/');
    onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    updateShow(data.username + " " + data.age);
});
} */




    return(
        <div id = "newElementId">
            <h1>Create</h1>
            <h1>{count}</h1>
            <button id = "addNewLink" onClick = {()=>setCount(count + 1)}>add link</button>
            <button id = "removeLink" onClick = {()=>setCount(count - 1)}>delete link</button>
            <GenerateLinks count = {count}/>
            
        </div>
    );
}

export default Create;