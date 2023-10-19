import React from 'react'
import { BrowserRouter,  Routes, Route } from "react-router-dom";

import Index from './pages';
import Home from './pages/Home';
import Deposit from './pages/Deposit/Deposit';
import DepositAdd from './pages/Deposit/AddDisposit';
import Sale from './pages/Sale/Sale';
import SaleAdd from './pages/Sale/SaleAdd';
import Report from './pages/Report/Report';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />}>
          <Route path="" element={<Home />} />
          <Route path="/disposit" element={<Deposit />} />
          <Route path="/disposit/add" element={<DepositAdd />} />
          <Route path="/sale" element={<Sale />} />
          <Route path="/sale/add" element={<SaleAdd />} />

          <Route path="/report" element={<Report />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
