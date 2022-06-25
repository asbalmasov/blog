import React from 'react';
import ReactDOM from "react-dom/client";
import Blog from './components/blogComponent/blog';
import Header from './components/headerComponent/header';
import './index.scss'
  
ReactDOM.createRoot(
  document.getElementById("app")
)
.render(
  <div>
    <Header />
    <Blog />
  </div>
);
