import React from 'react'
import './style.css'

function Modal({img, title, amount, rate, net}) {
  return (
    <div className='my-card'>
      <img src={img} alt='img1'/>
      <div className='desc'>
        <p className='title'>{title}</p>
        <p className='amount'>{amount}</p>
        <p className='net'><span className={net}>{rate}</span> this month</p>
      </div>
    </div>
  )
}

export default Modal
