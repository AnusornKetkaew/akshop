import React from 'react'
import { BrowserRouter,  Routes, Route, Link , NavLink } from "react-router-dom";

import Index from './pages';
import Home from './pages/Home';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/eContractfarm" element={<Index />}>
        <Route path="" element={<Home />} />
      </Route>
    </Routes>
    </BrowserRouter>
  )
}
