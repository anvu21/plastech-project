import React from 'react';
import { Routes, Route, Outlet} from 'react-router-dom';

//Components
import NavbarLayout from './components/Navbar/Navbar';

//Pages
import Home from './pages/Home';
import About from './pages/About';
import Blogs from './pages/Blogs';
import Signin from './pages/signin';
import Contact from './pages/Contact';
import Board from './components/Scoreboard/Board';
  
export default function App() {
  return (
    <>
      <NavbarLayout />
      <Outlet />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Blogs" element={<Blogs />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Scoreboard" element={<Board />} />
      </Routes>
    </>
  );
};


//------- Previous App function -----//
// import React, { Fragment } from "react";
// import "./App.css";

// //components

// import InputFood from "./components/InputFood";
// import ListFood from "./components/ListFood";

// function App() {
//   return (
//     <Fragment>
//       <div className="container">
//         <InputFood />
//         <ListFood />
//       </div>
//     </Fragment>
//   );
// }
// //<ListFood />
// export default App;
