import database from './firebase';
import { ref, set, onValue } from "firebase/database";

function uploadImgURL(name, url){
    const db = database;
        
        const starCountRef = ref(db, 'users/'+name);
        onValue(starCountRef, (snapshot) => {
                set(ref(db, 'users/'+name+'/zzurl'), {
                  0: url 
                });
            });
        }

    export default uploadImgURL;