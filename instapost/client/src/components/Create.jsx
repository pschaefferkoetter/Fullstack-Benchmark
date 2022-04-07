import React from 'react';
const axios = require('axios').default;

class Create extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      username: '',
      imageUrl: '',
      body: ''
    };
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit (event) {
    axios.post('api/posts', {
      data: this.state
    })
      .then(result => console.log(result))
      .then(() => this.props.getPostData())
      .then(() => this.setState({
        username: '',
        imageUrl: '',
        body: ''
      }))
      .catch(err => console.log(err));
    event.preventDefault();
  }

  render () {
    console.log(this.props);
    return (
      <form className="create" onSubmit={this.handleSubmit}>
        <h3>Add a Post!</h3>
        <input className="create__input"
          value={this.state.username}
          name="username"
          type="text"
          placeholder="Username"
          onChange={this.handleChange} />
        <input className="create__input"
          value={this.state.imageUrl}
          name="imageUrl"
          type="text"
          placeholder="Image URL"
          onChange={this.handleChange}/>
        <textarea
          value={this.state.body}
          className="create__body__textarea"
          name="body"
          placeholder="Here goes your post content."
          onChange={this.handleChange}
        ></textarea>
        <button className="create__button" type="submit">Send</button>
      </form>
    );
  }
}

export default Create;