import React from 'react';
import AddorRemoveLinks from './AddorRemoveLinks';

function Create(){


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
                            <AddorRemoveLinks />
                         </div>
                    </td>
                    <td>
                          <div id = "simulation">
                            <div className = "simContainer">
                                <div id = "dp"><i id = "userIcon" class="far fa-smile-wink"></i></div>
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