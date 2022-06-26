import React from 'react';
import './style/menu.scss'
  
function Menu(props) {


  return ( 
    <div className='menu-wrapper'>
      <h4 className='menu-h4'>Рубрики</h4>
      <p className='menu-p'>
        <a className='menu-a' href="#">Технологии</a>
      </p>
      <p className='menu-p'>
        <a className='menu-a' href="#">Разработка</a>
      </p>
      <p className='menu-p'>
        <a className='menu-a' href="#">Программы</a>
      </p>
      <p className='menu-p'>
        <a className='menu-a' href="#">Сервера</a>
      </p>
      <div className='menu-line'></div>
      <h4 className='menu-h4'>Архив</h4>
      <p className='menu-p'>
        <a className='menu-a' href="#">Июнь 2022</a>
      </p>
      <p className='menu-p'>
        <a className='menu-a' href="#">Май 2022</a>
      </p>
      <p className='menu-p'>
        <a className='menu-a' href="#">Апрель 2022</a>
      </p>
    </div>
  );
}
  
export default Menu;
