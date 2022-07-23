import React from 'react';
import { Routes, Route, Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

//Components
import NavbarLayout from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

//Pages
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import Signin from './pages/signin';
import Contact from './pages/Contact';
import NoPage from './pages/NoPage';
import Board from './components/Leaderboard/Board';
  
export default function App() {
  const location = useLocation();
  return (
    <>
      <NavbarLayout />
      <Outlet />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route index path="/" element={<Home />} />
          <Route path="/Blogs" element={<Blogs />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Leaderboard" element={<Board />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
};