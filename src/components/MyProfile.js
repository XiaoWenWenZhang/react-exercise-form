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
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [target.name]: value,
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log(JSON.stringify(this.state));
  }



render() {
  return (
    <form onSubmit={this.handleSubmit}>
      <h1>My profile</h1>

      <label htmlFor="name">Name:</label>
      <input
        type='text'
        id="name"
        name='name'
        placeholder={this.state.name}
        onChange={this.handleChange}>
      </input>

      <label htmlFor="gender">Gender:</label>
      <select
        name="gender" 
        id="gender"
        value={this.state.gender}
        onChange={this.handleChange}>
        <option value='male'>Male</option>
        <option value='female'>Female</option>
      </select>

      <label htmlFor="description">Description：</label>
      <textarea
        name="description"
        id="description"
        value={this.state.description}
        onChange={this.handleChange}>
      </textarea>

      <div>
        <input
          type='checkbox'
          name="agree"
          id="agree"
          onChange={this.handleChange}>
        </input>
        <p htmlFor="agree">I have read the terms of conduct</p>
      </div>

      <button
        type='submit'
        disabled={!this.state.name || !this.state.description || !this.state.agree}>
      Submit</button>
    </form>
    );
  }
}

export default MyProfile;


