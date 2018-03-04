import React, { Component } from 'react';
import { Input, formInputData, formValidation } from '../lib';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(value, name, validationState, isRequired) {
    const { data } = this.state;
    data[name] = { value, validation: validationState, isRequired };
    this.setState({
      data,
    });

    // if you want access to your form data
    const formData = formInputData(this.state.data); // eslint-disable-line no-unused-vars
    // tells you if the entire form validation is true or false
    const isFormValid = formValidation(this.state.data); // eslint-disable-line no-unused-vars
  }

  handleSubmit(event) {
    event.preventDefault();
    const isFormValid = formValidation(this.state.data);

    if (isFormValid) {
      // do something
    } else {
      // to do validation and display error msgs for all Inputs in the form
      Object.keys(this.state.data).map(input => [this[input].focus(), this[input].blur()]);
    }
  }

  render() {
    const emailOptions = { require_display_name: true };
    return (
      <form>
        <Input
          validator="isEmail"
          options={emailOptions}
          name="userEmail"
          placeholder="Enter email"
          label="Email address"
          onChange={this.handleChange}
          className="myCustomCSSClass"
          required
          setRef={(input) => { this.userEmail = input; }}
        />
        <Input
          validator="isAlphanumeric"
          name="userAddress"
          placeholder="Enter Address"
          label="Enter Address"
          onChange={this.handleChange}
          className="myCustomCSSClass"
          required
          setRef={(input) => { this.userAddress = input; }}
        />
        <Input
          validator="isAlphanumeric"
          name="userPassword"
          setRef={(input) => { this.userPassword = input; }}
          onChange={this.handleChange}
          type="password"
          minLength={8}
          maxLength={13}
        />
        <button
          type="submit"
          onClick={this.handleSubmit}
          className="btn btn-primary"
        >
          Sign in
        </button>
      </form>
    );
  }
}
