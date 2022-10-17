import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Users from '../components/Users';
import Board from '../components/Board/Board';

const Dashboard = () => {
  return (
    <div className='dashboard'>
    <Navbar/>
    <Sidebar/>
    <Users/>
    <Board/>

    </div>
  )
}

export default Dashboard