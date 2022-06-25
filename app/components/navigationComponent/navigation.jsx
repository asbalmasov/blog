import React from 'react';
import './style/navigation.scss'
  
function Navigation(props) {


  return ( 
    <div className='navigation-wrapper'>
      <div className='item'>Главная</div>
      <div className='item'>Блог</div>
      <div className='item'>Работы</div>
      <div className='item'>Обо мне</div>
    </div>
  );
}
  
export default Navigation;
