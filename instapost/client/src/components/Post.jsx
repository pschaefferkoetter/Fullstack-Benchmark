import React from 'react';
import moment from 'moment';
const axios = require('axios').default;

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAllText: null,
      showButton: this.props.postItem.body.length > 144,
      likes: this.props.postItem.likes
    };
    this.showPost = this.showPost.bind(this);
    this.updateLikes = this.updateLikes.bind(this);
  }

  showPost () {
    this.setState({
      showAllText: true,
      showButton: null
    });
  }

  updateLikes () {
    this.setState({
      likes: this.state.likes + 1
    });
    axios.patch(`api/posts/${this.props.postItem._id}`, {
      likes: this.state.likes
    })
      .then(result => console.log(result))
      .catch(err => console.log(err));
  }


  render () {
    let postItem = this.props.postItem;
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
        {this.state.showAllText ? <p>{postItem.body}</p> : <p>{`${postItem.body.slice(0, 144)}...`}</p>}
        {this.state.showButton && <button onClick={this.showPost}>show more</button>}
        <div className='post__actions'>
          <div className='post__likes'>{this.state.likes}</div>
          <div className='post__buttons'>
            <button onClick={this.updateLikes}>Like</button>
            <button>Comment</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
