import React, { Component } from 'react';
// import { Row, Col } from 'react-bootstrap';
import './App.css';
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

  handleChange(event, inputValue, inputName, validationState, isRequired) {
    const targetValue = event ? event.target.value : null;
    const value = event ? targetValue : inputValue;
    const name = event ? event.target.name : inputName;
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
      // this.setState({ callAPI: true });
    } else {
      // to do validation and display error msgs for all Inputs in the form
      Object.keys(this.state.data).map(input => [this[input].focus(), this[input].blur()]);
    }
  }

  render() {
    // const passwordValue = this.state.data.password && this.state.data.password.value
    //   ? this.state.data.password.value
    //   : null;

    return (
      <form className="example">
        <Input
          validator="isEmail" required
          label="Email" name="email" placeholder="Email"
        />
      </form>
    );
  }
}
