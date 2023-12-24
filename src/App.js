import './App.css';
import Table from './components/table';
import * as React from 'react';
import Layout from './components/Layout';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Edit from './pages/edit';
import NewFeed from './pages/newfeed';
import { AnimatePresence } from 'framer-motion';
import { Box } from '@mui/material';
import Home from './pages/home';

function App() {
  const location = useLocation();
  return (
    <>
      <Layout />
      <AnimatePresence mode="wait">

        <Routes location={location} key={location.pathname}>
          <Route path="/edit" element={<Edit />} />
          <Route path="/new-feed" element={<NewFeed />} />
          <Route path="/" element={<Home />} />
        </Routes>

      </AnimatePresence>
    </>
  );
}

export default App;
