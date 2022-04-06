import React from 'react';
import moment from 'moment';

const Post = function(props) {
  let postItem = props.postItem;

  return (
    <div className='post'>
      <div className='post__byline'>
        <div className='center'>
          <img
            className='avatar'
            src={'https://www.w3schools.com/w3images/avatar6.png'}
            alt='user avatar'
          />
          <span className='post__byline__user'>{postItem.username}</span>
        </div>
        {moment(postItem.createdAt).fromNow()}
      </div>
      <div className='post__image'>
        <img src={postItem.imageUrl}/>
      </div>
      <p>{postItem.body}</p>
      <div className='post__actions'>
        <div className='post__likes'>{postItem.likes}</div>
        <div className='post__buttons'>
          <button>Like</button>
          <button>Comment</button>
        </div>
      </div>
    </div>
  );
};

export default Post;
