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
            <table className = "creatorDashboardTable">
                <tr>
                    <td>
                        <div className = "creatorDashboard">
                            <button id = "addNewLink" onClick = {()=>setCount(count + 1)}><i class="fas fa-plus"></i> Add New Link</button>
                            <button id = "removeLink" onClick = {()=>setCount(count - 1)}><i class="fas fa-minus"></i></button>
                            <GenerateLinks count = {count}/>
                         </div>
                    </td>
                    <td>
                          <div id = "simulation">
                            <div className = "simContainer">
                                <div id = "dp"></div>
                                <div id = "one"></div>
                                <div id = "two"></div>
                                <div id = "three"></div>
                                <div id = "four"></div>
                                <div id = "five"></div>
                                <div id = "six"></div>
                              </div>
                          </div>  
                    </td>
                </tr>
            </table>
        </div>
    );
}

export default Create;