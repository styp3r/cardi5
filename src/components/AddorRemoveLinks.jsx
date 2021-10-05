import React, {useState} from 'react';

import GenerateLinks from './GenerateLinks';

function AddorRemoveLinks(){

    const [count, setCount] = useState(1);

    return(
        <div>
            <button id = "addNewLink" onClick = {()=>setCount(count + 1)}><i class="fas fa-plus"></i> Add New Link</button>
            <button id = "removeLink" onClick = {()=>{if(count!=1){setCount(count - 1); document.getElementById("addNewLink").disabled = false; document.getElementById("addNewLink").style.opacity = 1;}}}><i class="fas fa-minus"></i></button>
            <GenerateLinks count = {count}/>
        </div>
    );
}

export default AddorRemoveLinks;