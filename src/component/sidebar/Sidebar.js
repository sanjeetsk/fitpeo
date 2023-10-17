import React, { useState, useEffect } from 'react'
import './style.css';

function Sidebar() {
  // const [isOpen, setIsOpen] = useState(true);

  // const toggleSidebar = () => {
  //   setIsOpen(!isOpen);
  // }

  // useEffect(() => {
  //   if (window.innerWidth < 768) {
  //     setIsOpen(false); // Close the sidebar for smaller screens initially
  //   }
  // }, []);


  return (
    <div className='sidebar'>
      {window.innerWidth < 768 && (
        <button className="toggle-button">
          ☰
        </button>
      )}
      <ul>
        <li>Dashboard</li>
        <li>Product</li>
        <li>Customers</li>
        <li>Income</li>
        <li>Promote</li>
        <li>Help</li>
      </ul>
    </div>
  )
}

export default Sidebar
