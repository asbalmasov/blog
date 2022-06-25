import React from 'react';
import './style/header.scss'
import Logo from './../logoComponent/logo';
import Navigation from '../navigationComponent/navigation';
  
function Header(props) {

  return ( 
    <div className='header-wrapper'>
      <div className='header'>
        <Logo />
        <Navigation />
      </div>
    </div>
  );
}
  
export default Header;
