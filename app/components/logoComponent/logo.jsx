import React from 'react';
import './style/logo.scss'
  
function Logo(props) {


  return ( 
    <div className='logo-wrapper'>
      <h1 className='logo-h1'>BalmasovAS</h1>
      <p className='logo-p'>{`{ Смотри в IT }`}</p>
    </div>
  );
}
  
export default Logo;
