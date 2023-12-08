
import './App.css';
import { useState } from 'react'

import Header from './Header'
import Sidebar from './Sidebar'
import Home from './Home'

function App() {

  const[item,myitem]=useState("");


  
  
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false);


  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  function setItem(item){
    myitem(item);
  

  }




  return (

    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar  setItem={setItem} openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>

      <Home  display={item} />
    </div>
  )
}

export default App;
