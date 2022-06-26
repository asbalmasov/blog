import React from 'react';
import './style/blog.scss'
import Menu from './../menuComponent/menu';
import PostAnonce from '../postAnonceComponent/postAnonce';
  
function Blog(props) {

  return ( 
    <div className='blog-container'>
      <h2 className='blog-title-h2'>Блог</h2>

          <PostAnonce />
          <PostAnonce />
          <PostAnonce />
          <PostAnonce />
          <PostAnonce />


      <Menu />
    </div>
  );
}
  
export default Blog;
