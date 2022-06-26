import React from 'react';
import './style/blogPost.scss'
import PostAnonce from '../postAnonceComponent/postAnonce';
import Post from '../postComponent/post';
import { Routes, Route, Link } from 'react-router-dom';
import Menu from './../menuComponent/menu';
  
function BlogPost(props) {

  return ( 
    <div className='blog-post-container'>
      <h2 className='blog-post-title-h2'>Блог</h2>
        <Post />
        <Menu />
    </div>
  );
}
  
export default BlogPost;
