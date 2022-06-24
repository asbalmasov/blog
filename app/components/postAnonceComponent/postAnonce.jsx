import React from 'react';
import './style/postAnonce.scss'
  
function PostAnonce(props) {


  return ( 
    <div className='post-anonce-wrapper'>
      <div className='post-anonce'>{props.anonce}</div>
      <a className='post-anonce-read-more' href="#">продолжить →</a>
    </div>
  );
}
  
export default PostAnonce;
