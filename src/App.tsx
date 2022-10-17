import React from 'react';
import { Routes, Route } from "react-router-dom";

import './styles/App.scss';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import UserDashboard from './pages/UserDashboard';

function App() {
  return (
    <Routes>
<Route path="/"  element={<Login/>}/>
<Route path="/dashboard"  element={<Dashboard/>}/>
<Route path="/userdashboard"  element={<UserDashboard/>}/>
    </Routes>

  
  )
}

export default App;
