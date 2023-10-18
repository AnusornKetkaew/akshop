import React from 'react'
import { Outlet } from "react-router-dom";
import './index.sass'
import Navbar from '../component/Navbar/Navbar';
export default function index() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row'
    }}>
      <Navbar/>
      <div className="main-body">
        <Outlet />
      </div>
    </div>
  )
}
