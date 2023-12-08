import { wait } from '@testing-library/user-event/dist/utils';
import * as React from 'react';
//import axios from "axios";
import { useState } from "react";


 function Categories(){
const[category_name,setCategoryName]=useState("");

async function addCategory(){

   let data={category_name};


let result= await fetch("http://127.0.0.1:8000/api/set_category",{
    method:"POST",
    headers:{
"Content-Type":"application/json",
"Accept":"application/json"
    },
    body:JSON.stringify(data)
});

result=await result.json();

if(result.category_name && result.id){
    alert("successfully-added");
}else{
    alert("something went wrong");
}




}




return(
<>
<h1>categories</h1>
<p>Add-Categories</p>



<label>
        Add new  Categories:

        <input name='category_name' value={category_name}  onChange={(e)=>setCategoryName(e.target.value)}/>
      </label>
      <button onClick={()=>addCategory()}>Submit</button>
<p>{category_name}</p>




</>);


}
export default Categories;