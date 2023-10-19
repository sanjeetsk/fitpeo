import React from 'react'
import './style.css';
import { NavLink } from 'react-router-dom';

function Sidebar() {

  return (
    <div className='sidebar'>
      <div className='page-link'>
        <NavLink className='links' to={'/'}>Dashboard</NavLink>
        <NavLink className='links' to={'*'}>Product</NavLink>
        <NavLink className='links' to={'*'}>Customers</NavLink>
        <NavLink className='links' to={'*'}>Income</NavLink>
        <NavLink className='links' to={'*'}>Promote</NavLink>
        <NavLink className='links' to={'*'}>Help</NavLink>
      </div>
    </div>
  )
}

export default Sidebar
