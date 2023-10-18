import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import Sidebar from '../sidebar/Sidebar';
import './style.css'

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
  };

  const hideSidebar = () => {
    setIsSidebarOpen(false);
  };


  return (
    <div className='navbar'>
      {isSidebarOpen ? (
        <button className="toggle-button close" onClick={hideSidebar}>
          &#10006; {/* Close button */}
        </button>
      ) : (
        <button className="toggle-button" onClick={toggleSidebar}>
          ☰
        </button>
      )}
      <div id='user'>Hello Sharukh👋🏼,</div>
      {isSidebarOpen && <Sidebar />}
      <div className='input-box'>
        <FaSearch className='icon' />
        <input type='text' placeholder='Search' />
      </div>
    </div>
  )
}

export default Navbar
