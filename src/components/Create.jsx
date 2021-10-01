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
            <h1 className = "dashboardHeader">Get Started</h1>
            <div className = "creatorDashboard">
            <button id = "addNewLink" onClick = {()=>setCount(count + 1)}><i class="fas fa-plus"></i> Add New Link</button>
            <button id = "removeLink" onClick = {()=>setCount(count - 1)}><i class="fas fa-minus"></i></button>
            <GenerateLinks count = {count}/>
            </div>
        </div>
    );
}

export default Create;