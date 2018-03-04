import React, { Component } from 'react';
import { Input, formInputData, formValidation } from '../lib';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
    };
    this.handleChange = this.handleChange.bind(this);
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
          length={13}
        />
        <Input
          validator="isAlphanumeric"
          name="userPassword"
          onChange={this.handleChange}
          type="password"
          minLength={8}
          maxLength={13}
        />
        <button
          type="submit"
          className="btn btn-primary"
        >
          Sign in
        </button>
      </form>
    );
  }
}
