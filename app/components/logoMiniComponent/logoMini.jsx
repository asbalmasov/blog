import React from 'react';
import './style/logoMini.scss'
  
function LogoMini(props) {


  return ( 
    <div className='logo-mini-wrapper'>
      <h1 className='logo-mini-h1'>BalmasovAS</h1>
      <p className='logo-mini-p'>{`{ Смотри в IT }`}</p>
    </div>
  );
}
  
export default LogoMini;
