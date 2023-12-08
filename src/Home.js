import React  from "react";
import Dashboard from "./Dashboard";
import Categories from "./components/categories";
import Product_item from "./components/product_item"
import Products from "./components/product";


function Home({display}){
    return (
        <>


{display=="Dashboard"? <Dashboard/>:""}
    {display=="Products"?<div><Products/></div>:""}
   {display=="Categories"?<div><Categories/></div>:""}


   {display=="Product-item"?<div><Product_item/></div>:""}
   

   {display=="Customers"?<h1>dashboard</h1>:""}
   
   {display=="Inventory"?<h1>dashboard</h1>:""}

   
   {display=="Reports"?<h1>dashboard</h1>:""}
   
   {display=="Setting"?<h1>dashboard</h1>:""}


     
        
        </>


    )
}

export default Home;