import './App.css';
import {useState} from 'react';
import database from './firebase';
import { ref, set } from "firebase/database";

  
function App() {
  const [name , setName] = useState();
  const [age , setAge] = useState();
  //const [show, updateShow] = useState();
      
  // Push Function
  function writeUserData() {
    const db = database;
    set(ref(db, 'users/'+name), {
      username: name,
      age: age,
    });
  }

  /* Pull Function
  function readUserData(){
    const db = database;
    const starCountRef = ref(db, 'users/');
    onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    updateShow(data.username + " " + data.age);

    <button onClick = {readUserData}>READ</button>
      <p>{show}</p>
});
} */
  
  return (
    <div className="App" style={{marginTop : 250}}>
      <center>
      <input placeholder="Enter your name" value={name} 
      onChange={(e) => setName(e.target.value)}/>
      <br/><br/>
      <input placeholder="Enter your age" value={age} 
      onChange={(e) => setAge(e.target.value)}/>
      <br/><br/> 
      <button onClick={writeUserData}>PUSH</button>
      </center>
    </div>
  );
}
  
export default App;