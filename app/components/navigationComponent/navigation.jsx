import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './style/navigation.scss'
import Blog from './../blogComponent/blog';
  
function Navigation(props) {


  return ( 
    <>
      <div className='navigation-wrapper'>
        <div className='item'>Главная</div>
        <Link to='/blog' className='item'>Блог</Link>
        <div className='item'>Работы</div>
        <div className='item'>Обо мне</div>
      </div>
    </>
  );
}
  
export default Navigation;
