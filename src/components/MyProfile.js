import React, { Component } from 'react';
import './myProfile.less';

class MyProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Your name',
      gender: 'Male',
      description: 'Description about yourself',
      agree: false,

    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleDescription = event => {
    this.setState({
      description: event.target.value
    })
  }

  handleChecked = event => {
    this.setState({
      [event.target.name]: event.target.checked
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log(JSON.stringify(this.state));
  }



  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>My profile</h1>

        <div>
          <label>Name:</label>
          <input
            type='text'
            name='name'
            value={this.state.name}
            onChange={this.handleChange}>
          </input>
        </div>

        <div>
          <label>Gender:</label>
          <select
            value={this.state.gender}
            onChange={this.handleChange}>
            <option value='male'>Male</option>
            <option value='female'>Female</option>
          </select>
        </div>

        <div>
          <label>Description：</label>
          <textarea
            value={this.state.description}
            onChange={this.handleDescription}>
          </textarea>
        </div>

        <div>
          <input
            type='checkbox'
            onChange={this.handleChecked}>
          </input>
          <p>I have read the terms of conduct</p>
        </div>

        <button
          type='submit'
          disabled={!this.state.name || !this.state.description || !this.state.agree}>
        </button>
      </form>
    );
  }
}

export default MyProfile;


