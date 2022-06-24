import React from 'react';
import './style/postDate.scss'
  
function PostDate(props) {
  return (
    <div className="date-wrapper">
      <div className="date-day">{props.dateDay}</div>
      <div className="date-month">{props.dateMonth}</div>
      <div className="date-year">{props.dateYear}</div>
    </div>
  );
}
  
export default PostDate;
