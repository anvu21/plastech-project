import React, { useState } from "react";
import { Link } from "react-router-dom";

//Components
// import DropDownMenu from "./DropDownMenu";

//CSS styles
import "./Navbar.css";

//Icons
// import {ReactComponent as HomeIcon} from '../../icons/home.svg';
// import {ReactComponent as BarsIcon} from '../../icons/bars.svg'
// import { ReactComponent as ArrowIcon } from '../../icons/backArrow.svg';


function NavbarLayout() {
  return (
    <>
      <Navbar type="navbar">
        <NavItem>
          <Link to="/Signin" className="navbar-link">
            Signin
          </Link>
        </NavItem>

        <NavItem>
          <Link to="/Contact" className="navbar-link">
            Contact
          </Link>
        </NavItem>

        <NavItem>
          <Link to="/Leaderboard" className="navbar-link">
            Leaderboard
          </Link>
        </NavItem>

        <NavItem>
          <Link to="/" className="navbar-link">
            Home
          </Link>
        </NavItem>
      </Navbar>
    </>
  );
};

function Navbar(props) {
  return (
    <nav className={props.type}>
      <ul className='navbar-nav'>
        { props.children }
      </ul>
    </nav>
  );
};

function NavItem(props) {
  const [isOpen, setOpen] = useState(false);
  const handleClick = () => setOpen(!isOpen);

  return (
    <li className={`nav-item ${ props.specialClasses }`}>
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

export default NavbarLayout;
export {Navbar, NavItem};