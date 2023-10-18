import React from 'react'
import { BrowserRouter,  Routes, Route } from "react-router-dom";

import Index from './pages';
import Home from './pages/Home';
import Deposit from './pages/Deposit/Deposit';
import Sale from './pages/Sale/Sale';
import Report from './pages/Report/Report';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />}>
          <Route path="" element={<Home />} />
          <Route path="/disposit" element={<Deposit />} />
          <Route path="/sale" element={<Sale />} />
          <Route path="/report" element={<Report />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
