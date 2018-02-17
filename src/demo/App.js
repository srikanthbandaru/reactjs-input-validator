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
  }

  render() {
    return (
      <div>
        <Input validator="isEmail" name="name" onChange={this.handleChange} />
        <Input validator="isBoolean" name="address" onChange={this.handleChange} />
      </div>
    )
  }
}
