import React from 'react';
import './style/footer.scss'
import LogoMini from './../logoMiniComponent/logoMini';
  
function Footer(props) {

  return ( 
    <div className='footer-wrapper'>
      <div className='footer'>
        <LogoMini />
        <div className='text-info'>
          <p className='text-info-p'>
            Копирование инормации со сслкой на
            <a className='text-info-a' href='#'> balmasov.pro</a>
          </p>
          <p className='text-info-p'>
            ©2022 Блог Балмасова Алексея по WEB-разработке
          </p>
        </div>
      </div>
    </div>
  );
}
  
export default Footer;
