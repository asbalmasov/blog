import React from 'react';
import PostAnonce from '../postAnonceComponent/postAnonce';
import PostInfo from '../postInfoComponent/postInfo';
import PostTitle from '../postTitleComponent/postTitle';
import PostDate from './../postDateComponent/postDate';
import PostImage from './../postImageComponent/postImage';
import './style/post.scss'
import Menu from './../menuComponent/menu';
  
function Post(props) {
  const dateDayCreatePost = '23';
  const dateMonthCreatePost = 'Сентября';
  const dateYearCreatePost = '2021';
  const postTitle = 'Заголовок первого поста на блоге Балмасова А.С.';
  const postAnonce = 'Повседневная практика показывает, что консультация с широким активом позволяет выполнять важные задания по разработке существенных финансовых и административных условий. Не следует, однако забывать, что начало повседневной работы по формированию позиции позволяет оценить значение позиций, занимаемых участниками в отношении поставленных задач.';
  const postCategory = ["Технологий", "Новости"];
  const postComment = '5';
  const postAuthor = 'BalmasovAS';

  return ( 
    <div className='post-wrapper'>
      <PostDate
        dateDay = {dateDayCreatePost}
        dateMonth = {dateMonthCreatePost}
        dateYear = {dateYearCreatePost}
      />
      <div className='post'>
        <PostImage />
        <PostTitle title = {postTitle} />
        <PostAnonce anonce = {postAnonce} />
        <PostInfo 
          category = {postCategory}
          comment = {postComment}
          author = {postAuthor}
        />
      </div>
      <Menu />
    </div>
  );
}
  
export default Post;
