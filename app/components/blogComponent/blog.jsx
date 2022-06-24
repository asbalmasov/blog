import React from 'react';
import './style/blog.scss'
import Post from './../postComponent/post';
  
function Blog(props) {


  return ( 
    <div className='blog-container'>
      <h2 className='blog-title-h2'>Блог</h2>
      <Post />
    </div>
  );
}
  
export default Blog;
