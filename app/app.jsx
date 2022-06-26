import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import Blog from './components/blogComponent/blog';
import { useLocation } from 'react-router-dom'
import BlogPost from './components/blogPost/blogPost';
  
function App(props) {

  let location = useLocation();

  return ( 
    <>
    {console.log(location)}
      <Header />
        <Routes>
          <Route path='/blog' element={<Blog location = {location} />} />
          <Route path='/blog/post_url' element={<BlogPost />} />
        </Routes>
      <Footer />
    </>
  );
}
  
export default App;