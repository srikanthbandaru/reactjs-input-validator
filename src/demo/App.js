import React, { Component } from 'react'
import { Input, formInputData, formValidation } from '../lib';

export default class App extends Component {
  constructor (){
      super();
      this.state = {
          data : {}
      };
      this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value, name, validationState) {
    const data = this.state.data;
    data[name] = {value: value, validation: validationState}

    this.setState({
      data: data
    })

    // if you want access to your form data
    let formData = formInputData(this.state.data);
    // tells you if the entire form validation is true or false
    let isFormValid = formValidation(this.state.data)
  }

  render() {
    return (
      <form>
        <Input validator="isEmail" name="userEmail" placeholder="Enter email" label="Email address" onChange={this.handleChange} />
        <Input validator="isAlphanumeric" name="userPassword" onChange={this.handleChange} type="password"/>
        <button type="submit" class="btn btn-primary" disabled={!formValidation(this.state.data)}>Sign in</button>
      </form>
    )
  }
}
