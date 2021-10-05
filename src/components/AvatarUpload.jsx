import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import storage from '../firebaseStorage';
import React, {useState} from 'react';


function AvatarUpload(props){
    
const [img, setImg] = useState();

    function uploadData(){
console.log(img.name);
const storageRef = ref(storage, 'images/'+ props.name + '/'+ img.name); 

const uploadTask = uploadBytesResumable(storageRef, img);

// Register three observers:
// 1. 'state_changed' observer, called any time the state changes
// 2. Error observer, called on failure
// 3. Completion observer, called on successful completion
uploadTask.on('state_changed', 
  (snapshot) => {
    // Observe state change events such as progress, pause, and resume
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
    }
  }, 
  (error) => {
    // Handle unsuccessful uploads
    console.log(error);
  }, 
  () => {
    // Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      console.log('File is available at', downloadURL);
    });
  }
);
    }



return(
    <div>
        <input type = "file" onChange = {(e) => setImg(e.target.files[0])}/>
        <button onClick = {uploadData}>PUSH</button>
    </div>
);
}

export default AvatarUpload;

