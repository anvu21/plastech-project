import { React } from 'react';
import { Link } from "react-router-dom";

//CSS Styling
import '../Navbar/Navbar.css';

//Components
import { Navbar, NavItem } from '../Navbar/Navbar';

export default function Footer() {
    return (
        <Navbar type="footer">
            <NavItem>
                <Link to="#" className='navbar-link'>
                    Newsletter
                </Link>
            </NavItem>

            <NavItem>
                <Link to="#" className='navbar-link'>
                    Mailing List
                </Link>
            </NavItem>

            <NavItem>
                <Link to="#" className='navbar-link'>
                    Join
                </Link>
            </NavItem>
        </Navbar>
    );
};