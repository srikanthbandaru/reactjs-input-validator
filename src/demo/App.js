import React, { Component } from 'react'
import { Input } from '../lib';

export default class App extends Component {
  constructor (){
      super();
      this.state = {
          formData : {}
      };

      this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value, name) {
    const formData = this.state.formData;
    formData[name] = value

    this.setState({
      formData: formData
    })

    // You can now find your form data by doing
    console.log(this.state.formData);
  }

  render() {
    return (
      <div>
        <Input validator="isEmail" name="userEmail" placeholder="Enter email" label="Email address" onChange={this.handleChange} />
        <Input validator="isAlphanumeric" name="userPassword" onChange={this.handleChange} type="password"/>
      </div>
    )
  }
}
