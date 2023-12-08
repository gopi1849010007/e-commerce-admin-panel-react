import React, { useState } from 'react'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'

function Sidebar({setItem,openSidebarToggle, OpenSidebar}) {



function getItem(item){

    setItem(item);


}





  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <BsCart3  className='icon_header'/> SHOP
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item' onClick={()=>getItem("Dashboard")}>
           
                    <BsGrid1X2Fill className='icon'  /> Dashboard
              
            </li>

            <li className='sidebar-list-item'   onClick={()=>getItem("Product-item")}>
                
                    <BsFillArchiveFill className='icon' /> Product-item
                
            </li>
            <li className='sidebar-list-item'   onClick={()=>getItem("Products")}>
                
                    <BsFillArchiveFill className='icon' /> Products
                
            </li>
            <li className='sidebar-list-item'  onClick={()=>getItem("Categories")}>
               
                    <BsFillGrid3X3GapFill className='icon' /> Categories
               
            </li>
            <li className='sidebar-list-item'  onClick={()=>getItem("Customers")}>
            
                    <BsPeopleFill className='icon'/> Customers
              
            </li>
            <li className='sidebar-list-item'  onClick={()=>getItem("Inventory")}>
                
                    <BsListCheck className='icon'/> Inventory
              
            </li>
            <li className='sidebar-list-item'  onClick={()=>getItem("Reports")}>
              
                    <BsMenuButtonWideFill className='icon' /> Reports
         
            </li>
            <li className='sidebar-list-item'  onClick={()=>getItem("Setting")}>
                
                    <BsFillGearFill className='icon' /> Setting
      
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar