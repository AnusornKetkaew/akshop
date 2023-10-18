import React from 'react'
import { Outlet } from "react-router-dom";
import './index.sass'
export default function index() {
  return (
    <div>
      <div className="main-body">
          <Outlet />
        </div>
    </div>
  )
}
