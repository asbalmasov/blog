import React from 'react';
import './style/postDescription.scss';
import { Link } from 'react-router-dom';
  
function postDescription(props) {

  return ( 
    <div className='post-description-wrapper'>
      <div className='post-description'>{props.anonce}</div>
      <Link to={props.url} className='post-description-read-more'>продолжить →</Link>
    </div>
  );
}
  
export default postDescription;
