import React from 'react';
import './style/postInfo.scss'
  
function PostInfo(props) {

  return ( 
    <div className='post-info-wrapper'>
      <div className='post-in-category'>
        {props.category.map(element => {
          return <a className='post-info-a' href='#'>{element}</a>
        })}
      </div>
      <div className='post-comment'>
        <a className='post-info-a' href="">{props.comment} комментариев</a>
      </div>
      <div className='post-author'>
        <a className='post-info-a' href="">{props.author}</a>
      </div>
    </div>
  );
}
  
export default PostInfo;
