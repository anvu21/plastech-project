import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group'

//Icons
import { ReactComponent as HomeIcon } from '../../icons/home.svg'
// import { ReactComponent as BellIcon } from '../../icons/bell.svg'
import { ReactComponent as ArrowIcon } from '../../icons/backArrow.svg';

//CSS styles
import './Dropdown.css';


export default function DropDownMenu() {
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