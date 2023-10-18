import React from 'react';
import Modal from '../component/modal/Modal';
import img1 from '../asset/earning.png';
import img2 from '../asset/Orders.png';
import img3 from '../asset/Balance.png';
import img4 from '../asset/sales.png';
import Piechart from '../component/piechart/Piechart';
import BarGraph from '../component/bargraph/BarGraph';
import Transaction from '../component/transactions/Transaction';
import './style.css';

function Dashboard() {
  return (
    <div className='dashboard'>
      <div className='my-row'>
        <Modal img={img1} title="Earning" amount='$198k' rate="↑ 37.8%" net="up"/>
        <Modal img={img2} title="Orders" amount='$2.4k' rate="↓ 2%" net="down" />
        <Modal img={img3} title="Balance" amount='$2.4k' rate="↓ 2%" net="down" />
        <Modal img={img4} title="Total Sales" amount='$89k' rate="↑ 11%" net="up" />
      </div>
      <div className='graph'>
        <BarGraph />
        <Piechart />
      </div>
      <Transaction />
    </div>
  )
}

export default Dashboard
