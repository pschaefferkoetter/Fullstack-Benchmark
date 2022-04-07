import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
const axios = require('axios').default;

import Feed from './components/Feed.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      feedData: null
    };
    this.getPostData = this.getPostData.bind(this);
  }

  getPostData() {
    axios.get('/api/posts')
      .then(res => this.setState({
        feedData: res.data
      }))
      .catch(err => console.log('Error!', err));
  }

  componentDidMount() {
    this.getPostData();
  }


  //grgr

  render() {
    return (
      <div>
        <div className="nav">
          <span className="nav__logo" >
            Instapost
          </span>
        </div>

        <div className="main">
          {this.state.feedData && <Feed
            feedData = {this.state.feedData}
            getPostData = {this.getPostData}
          />}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
