import React from 'react';
import ReactDOM from "react-dom/client";
import Blog from './components/blogComponent/blog';
import './index.scss'
  
ReactDOM.createRoot(
  document.getElementById("app")
)
.render(
  <div>
    <Blog />
  </div>
);
