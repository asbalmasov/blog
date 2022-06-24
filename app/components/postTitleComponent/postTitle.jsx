import React from 'react';
import './style/postTitle.scss'
  
function PostTitle(props) {

  return ( 
    <h2 className='post-title-h2'>
      <a className='post-title-a' href="#">{props.title}</a>
    </h2>
  );
}
  
export default PostTitle;
