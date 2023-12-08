import * as React from 'react';
import {useState} from 'react';

const Product_item=()=>{
      const[sku,setSku]=useState();
      const[price,setPrice]=useState();

      const submit=()=>{
        alert(sku+" "+price);

      }



    return(<>
    <h1>product-item</h1>
    <input type="text" name="sku"  value={sku} onChange={(e)=>setSku(e.target.value)} /> 
    <input type="text" name="price" value={price} onChange={(e)=>setPrice(e.target.value)} /> 
    <button onClick={()=>submit()}>Submit</button>
    
    
    </>);
}

export default Product_item;