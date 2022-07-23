import React, { useState } from "react";
import { Link } from "react-router-dom"
import { CSSTransition } from 'react-transition-group'

//CSS styles
import "./Navbar.css";
import "./Dropdown.css"

//Icons
import {ReactComponent as HomeIcon} from '../../icons/home.svg'
import { ReactComponent as ArrowIcon } from '../../icons/backArrow.svg';


export default function NavbarLayout() {
  return (
    <Navbar>
      <NavItem icon={<HomeIcon />}>
        <DropDownMenu></DropDownMenu>
      </NavItem>

      <NavItem>
        <Link to='/About'>
          About
        </Link>
      </NavItem>

      <NavItem>
        <Link to="/Contact" className="link-button">
          Contact
        </Link>
      </NavItem>

      <NavItem>
        <Link to="/Scoreboard" className="link-button">
          Scoreboard
        </Link>
      </NavItem>

      <NavItem>
        <Link to="/Signin" className="link-button">
          Signin
        </Link>
      </NavItem>
    </Navbar>
  );
};

function Navbar(props) {
  return (
    <nav className='navbar'>
      <ul className='navbar-nav'> {/* 'ul' is unordered list */}
        { props.children }
      </ul>
    </nav>
  );
};


function NavItem(props) {
  const [isOpen, setOpen] = useState(false);
  const handleClick = () => setOpen(!isOpen);

  return (
    <li className='nav-item'> {/** 'li' is a list item */}
      { props.icon ?
        <>
          <Link to="#" className='icon-button' onClick={handleClick}>
            {props.icon}
          </Link>
          {isOpen && props.children}
        </>
        :
        <>
          {props.children}
        </>
      }
    </li>
  );
};


function DropDownMenu() {
  const[activeMenu, setActiveMenu] = useState('main')

  function DropDownItem(props) {
    const handleClick = () => props.goToMenu && setActiveMenu(props.goToMenu)

    return (
      <Link to="#" className='menu-item' onClick = {handleClick}>
        <span className='icon-button'>{props.leftIcon}</span>
        {props.children}
  
        {/*Statement below makes sure right icon is in props before making right icon appear*/}
        {props.rightIcon ? <span className='icon-button icon-right'>{props.rightIcon}</span> : null}
      </Link>
    );
  };

  return (
    <div className='dropdown'>
      <CSSTransition
        in = {activeMenu === 'main'}
        unmountOnExit
        timeout={500}
        classNames="menu-primary"
        >
          <div className='menu'>
            <DropDownItem>My profile</DropDownItem>
            <DropDownItem
              leftIcon={<HomeIcon/>}
              // rightIcon={<BellIcon/>}
              goToMenu="settings">
                Settings
            </DropDownItem>
          </div>
      </CSSTransition>

      <CSSTransition
        in = {activeMenu === 'settings'}
        unmountOnExit
        timeout={500}
        classNames="menu-secondary"
        >
          <div className='menu'>
            <DropDownItem>Settings</DropDownItem>
            <DropDownItem
              leftIcon={<ArrowIcon/>}
              goToMenu="main">
            </DropDownItem>
          </div>
      </CSSTransition>
    </div>
  );
};





//------ NavBar from GeeksforGeeks ----//
// import { Nav, NavLink, NavMenu } from "./NavbarElements";
// <Nav>
//   <NavMenu>
//     <NavLink to="/about" activeStyle>
//       About
//     </NavLink>
//     <NavLink to="/contact" activeStyle>
//       Contact Us
//     </NavLink>
//     <NavLink to="/blogs" activeStyle>
//       Blogs
//     </NavLink>
//     <NavLink to="/sign-up" activeStyle>
//       Sign Up
//     </NavLink>
//   </NavMenu>
// </Nav>