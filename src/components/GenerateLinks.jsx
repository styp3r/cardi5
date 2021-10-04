import React, {useState} from 'react';
import database from '../firebase';
import { ref, set, onValue } from "firebase/database";

function GenerateLinks(props){


  const [link1 , setLink1] = useState("");
  const [link1Text , setLink1Text] = useState("");
  const [link2 , setLink2] = useState("");
  const [link2Text , setLink2Text] = useState("");
  const [link3 , setLink3] = useState("");
  const [link3Text , setLink3Text] = useState("");
  const [link4 , setLink4] = useState("");
  const [link4Text , setLink4Text] = useState("");
  const [link5 , setLink5] = useState("");
  const [link5Text , setLink5Text] = useState("");
  const [link6 , setLink6] = useState(""); 
  const [link6Text , setLink6Text] = useState("");
  const [color, setColor] = useState("#66ffff");
  const [name , setName] = useState("");
  const [error, setError] = useState("");
  var col = color;
  const [url, setUrl] = useState();

  const enterName = <input className = "nameSpacing" type = "text" placeholder="What do we call you?" value={name} onClick = {()=> document.getElementById("dp").style.display= "block"} onChange={(e) => setName(e.target.value)}/>;
  const enterLink1 = <input className = "spacing" type = "url" placeholder="https://" value={link1} onChange={(e) => setLink1(e.target.value)}/>;
  const enterLink1Text = <input className = "spacing" type = "text" placeholder="Title" value={link1Text} onClick = {()=> document.getElementById("one").style.display= "block"} onChange={(e) => setLink1Text(e.target.value)}/>;
  const enterLink2 = <input className = "spacing" type = "url" placeholder="https://" value={link2} onChange={(e) => setLink2(e.target.value)}/>;
  const enterLink2Text = <input className = "spacing" type = "text" placeholder="Title" value={link2Text} onClick = {()=> document.getElementById("two").style.display= "block"} onChange={(e) => setLink2Text(e.target.value)}/>;
  const enterLink3 = <input className = "spacing" type = "url" placeholder="https://" value={link3} onChange={(e) => setLink3(e.target.value)}/>;
  const enterLink3Text = <input className = "spacing" type = "text" placeholder="Title" value={link3Text} onClick = {()=> document.getElementById("three").style.display= "block"} onChange={(e) => setLink3Text(e.target.value)}/>;
  const enterLink4 = <input className = "spacing" type = "url" placeholder="https://" value={link4} onChange={(e) => setLink4(e.target.value)}/>;
  const enterLink4Text = <input className = "spacing" type = "text" placeholder="Title" value={link4Text} onClick = {()=> document.getElementById("four").style.display= "block"} onChange={(e) => setLink4Text(e.target.value)}/>;
  const enterLink5 = <input className = "spacing" type = "url" placeholder="https://" value={link5} onChange={(e) => setLink5(e.target.value)}/>;
  const enterLink5Text = <input className = "spacing" type = "text" placeholder="Title" value={link5Text} onClick = {()=> document.getElementById("five").style.display= "block"} onChange={(e) => setLink5Text(e.target.value)}/>;
  const enterLink6 = <input className = "spacing" type = "url" placeholder="https://" value={link6} onChange={(e) => setLink6(e.target.value)}/>;
  const enterLink6Text = <input className = "spacing" type = "text" placeholder="Title" value={link6Text} onClick = {()=> document.getElementById("six").style.display= "block"} onChange={(e) => setLink6Text(e.target.value)}/>;



   // Push Function
   function writeUserData1() {
    const db = database;
    var flag = 0;
    
    const starCountRef = ref(db, 'users/'+name);
    onValue(starCountRef, (snapshot) => {
        var firstName = snapshot.child("username").val();
        if(firstName !==name && flag === 0){
          flag = 1;
          setError("");
    setUrl("http://localhost:4000/" + name);
            set(ref(db, 'users/'+name), {
              username: name,
              zcolor: color,
              link1: link1,
              link1Text : link1Text
            });
            
        } else if (flag!==1){
          setError("Username already taken!");
        }

    });
     
      }

      function writeUserData2() {
        const db = database;
        var uniqueId = Math.floor(Math.random()*100000);
        setUrl("http://localhost:4000/" + name+ uniqueId);
                set(ref(db, 'users/'+name + uniqueId), {
                  username: name,
                  zcolor: color,
                  link1: link1,
                  link1Text : link1Text,
                  link2: link2,
                  link2Text : link2Text
                }); 
          }

          function writeUserData3() {
            const db = database;
            var uniqueId = Math.floor(Math.random()*100000);
            setUrl("http://localhost:4000/" + name+ uniqueId);
                    set(ref(db, 'users/'+name + uniqueId), {
                      username: name,
                      zcolor: color,
                      link1: link1,
                      link1Text : link1Text,
                      link2: link2,
                      link2Text : link2Text,
                      link3: link3, 
                      link3Text : link3Text
                    }); 
              }

              function writeUserData4() {
                const db = database;
                var uniqueId = Math.floor(Math.random()*100000);
                setUrl("http://localhost:4000/" + name+ uniqueId);
                        set(ref(db, 'users/'+name + uniqueId), {
                          username: name,
                          zcolor: color,
                          link1: link1,
                          link1Text : link1Text,
                          link2: link2,
                          link2Text : link2Text,
                          link3: link3,
                          link3Text : link3Text,
                          link4: link4,
                          link4Text : link4Text
                        }); 
                  }

                  function writeUserData5() {
                    const db = database;
                    var uniqueId = Math.floor(Math.random()*100000);
                    setUrl("http://localhost:4000/" + name+ uniqueId);
                            set(ref(db, 'users/'+name + uniqueId), {
                              username: name,
                              zcolor: color,
                              link1: link1,
                              link1Text : link1Text,
                              link2: link2,
                              link2Text: link2Text,
                              link3: link3,
                              link3Text : link3Text,
                              link4: link4,
                              link4Text : link4Text,
                              link5: link5, 
                              link5Text : link5Text
                            }); 
                      }

                      function writeUserData6() {
                        const db = database;
                        var uniqueId = Math.floor(Math.random()*100000);
                        setUrl("http://localhost:4000/" + name+ uniqueId);
                                set(ref(db, 'users/'+name + uniqueId), {
                                  username: name,
                                  zcolor: color,
                                  link1: link1,
                                  link1Text : link1Text,
                                  link2: link2,
                                  link2Text : link2Text,
                                  link3: link3,
                                  link3Text: link3Text,
                                  link4: link4,
                                  link4Text: link4Text,
                                  link5: link5,
                                  link5Text: link5Text,
                                  link6: link6, 
                                  link6Text: link6Text
                                }); 
                          }

      if(props.count > 5){
        document.getElementById("addNewLink").disabled = true;
        document.getElementById("addNewLink").style.opacity = 0.5;
      }


      

    switch(props.count){
        case 1:
          
            return (
                <div>
                  <div className = "enterNameContainer">
                    <p>Give us a username</p>
                    {enterName}
                  </div>
                    <p className = "red">{error}</p>
                    <div className = "linkInputContainer">
                        {enterLink1Text}
                        {enterLink1}
                    </div>
                    <div className = "colorPickerContainer">
                    <p>Choose a background theme</p>
                    <input className = "colorPicker" type="color" value={color} onChange = {(c)=>{setColor(c.target.value);document.getElementById("simulation").style.background = `linear-gradient(${c.target.value}, #ffffff)`; } }/>
                    </div> 
                    <button id = "uploadBtn" onClick={writeUserData1}>Create</button>
                    <p>{url}</p>
                </div>
            );
        case 2:
            return(
                <div>
                  <div className = "enterNameContainer">
                    <p>Give us a username</p>
                    {enterName}
                  </div>
                    <div className = "linkInputContainer">
                    {enterLink1Text}
                    {enterLink1}
                    </div>
                    <div className = "linkInputContainer">
                    {enterLink2Text}
                    {enterLink2}
                    </div>
                    <div className = "colorPickerContainer">
                    <p>Choose a background theme</p>
                    <input className = "colorPicker" type="color" value={color} onChange = {(c)=>{setColor(c.target.value);document.getElementById("simulation").style.background = `linear-gradient(${c.target.value}, #ffffff)`; } }/>
                    </div> 
            <button id = "uploadBtn" onClick={writeUserData2}>Create</button>
            <p>{url}</p>
                </div>
            );
        case 3:
            return(
                <div>
                    <div className = "enterNameContainer">
                    <p>Give us a username</p>
                    {enterName}
                    </div>
                    <div className = "linkInputContainer">
                    {enterLink1Text}
                    {enterLink1}
                    </div>
                    <div className = "linkInputContainer">
                    {enterLink2Text}
                    {enterLink2}
                    </div>
                    <div className = "linkInputContainer">
                    {enterLink3Text}
                    {enterLink3}
                    </div>
                    <div className = "colorPickerContainer">
                    <p>Choose a background theme</p>
                    <input className = "colorPicker" type="color" value={color} onChange = {(c)=>{setColor(c.target.value);document.getElementById("simulation").style.background = `linear-gradient(${c.target.value}, #ffffff)`; } }/>
                    </div> 
            <button id = "uploadBtn" onClick={writeUserData3}>Create</button>
            <p>{url}</p>
                </div>
            );
        case 4:
            return(
                <div>
                    <div className = "enterNameContainer">
                    <p>Give us a username</p>
                    {enterName}
                    </div>
                    <div className = "linkInputContainer">
                    {enterLink1Text}
                    {enterLink1}
                    </div>
                    <div className = "linkInputContainer">
                    {enterLink2Text}
                    {enterLink2}
                    </div>
                    <div className = "linkInputContainer">
                    {enterLink3Text}
                    {enterLink3}
                    </div>
                    <div className = "linkInputContainer">
                    {enterLink4Text}
                    {enterLink4}
                    </div>
                    <div className = "colorPickerContainer">
                    <p>Choose a background theme</p>
                    <input className = "colorPicker" type="color" value={color} onChange = {(c)=>{setColor(c.target.value);document.getElementById("simulation").style.background = `linear-gradient(${c.target.value}, #ffffff)`; } }/>
                    </div>
            <button id = "uploadBtn" onClick={writeUserData4}>Create</button>
            <p>{url}</p>
                </div>
            );
        case 5:
            return(
                <div>
                    <div className = "enterNameContainer">
                    <p>Give us a username</p>
                    {enterName}
                    </div>
                    <div className = "linkInputContainer">
                    {enterLink1Text}
                    {enterLink1}
                    </div>
                    <div className = "linkInputContainer">
                    {enterLink2Text}
                    {enterLink2}
                    </div>
                    <div className = "linkInputContainer">
                    {enterLink3Text}
                    {enterLink3}
                    </div>
                    <div className = "linkInputContainer">
                    {enterLink4Text}
                    {enterLink4}
                    </div>
                    <div className = "linkInputContainer">
                    {enterLink5Text}
                    {enterLink5}
                    </div>
                    <div className = "colorPickerContainer">
                    <p>Choose a background theme</p>
                    <input className = "colorPicker" type="color" value={color} onChange = {(c)=>{setColor(c.target.value);document.getElementById("simulation").style.background = `linear-gradient(${c.target.value}, #ffffff)`; } }/>
                    </div>
            <button id = "uploadBtn" onClick={writeUserData5}>Create</button>
            <p>{url}</p>
                </div>
            );
        case 6:
            return(
                <div>
                    <div className = "enterNameContainer">
                    <p>Give us a username</p>
                    {enterName}
                    </div>
                    <div className = "linkInputContainer">
                    {enterLink1Text}
                    {enterLink1}
                    </div>
                    <div className = "linkInputContainer">
                    {enterLink2Text}
                    {enterLink2}
                    </div>
                    <div className = "linkInputContainer">
                    {enterLink3Text}
                    {enterLink3}
                    </div>
                    <div className = "linkInputContainer">
                    {enterLink4Text}
                    {enterLink4}
                    </div>
                    <div className = "linkInputContainer">
                    {enterLink5Text}
                    {enterLink5}
                    </div>
                    <div className = "linkInputContainer">
                    {enterLink6Text}
                    {enterLink6}
                    </div>
                    <div className = "colorPickerContainer">
                    <p>Choose a background theme</p>
                    <input className = "colorPicker" type="color" value={color} onChange = {(c)=>{setColor(c.target.value);document.getElementById("simulation").style.background = `linear-gradient(${c.target.value}, #ffffff)`; } }/>
                    </div>
            <button id = "uploadBtn" onClick={writeUserData6}>Create</button>
            <p>{url}</p>
                </div>
            ); 


    }

    /*
            <input className = "spacing" type = "text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)}/>
            <input className = "spacing" type = "url" placeholder="Enter link1" value={link1} onChange={(e) => setLink1(e.target.value)}/> 
            <input className = "spacing" type = "url" placeholder="Enter link2" value={link2} onChange={(e) => setLink2(e.target.value)}/> 
            <input className = "spacing" type = "url" placeholder="Enter link3" value={link3} onChange={(e) => setLink3(e.target.value)}/> 
            <input className = "spacing" type = "url" placeholder="Enter link4" value={link4} onChange={(e) => setLink4(e.target.value)}/> 
            <input className = "spacing" type = "url" placeholder="Enter link5" value={link5} onChange={(e) => setLink5(e.target.value)}/> 
            <input className = "spacing" type = "url" placeholder="Enter link6" value={link6} onChange={(e) => setLink6(e.target.value)}/> 
            <button onClick={writeUserData}>PUSH</button>
            <p>{url}</p> */
}

export default GenerateLinks;