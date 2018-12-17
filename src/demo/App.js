import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import './App.css';
import { Field, formInputData, formValidation } from '../lib';
/*eslint-disable*/

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
    const value = (event && event.target.value) || inputValue;
    const { data } = this.state;
    data[inputName] = { value, validation: validationState, isRequired };
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
      this.setState({ callAPI: true });
    } else {
      this.setState({ callAPI: true });
      // to do validation and display error msgs for all Inputs in the form
      Object.keys(this.state.data).map(input => [this[input].focus(), this[input].blur()]);
    }
  }

  render() {
    const passwordValue = this.state.data.password && this.state.data.password.value;

    return (
      <form className="example">
        <Row>
          <Col md={6}>

            {/*
              Input required validation check with
              library default error messages
            */}
            <Field
              required
              label="Full Name" name="fullName" placeholder="First Last"
              onChange={this.handleChange}
              value={this.state.data.fullName}
              setRef={(input) => { this.fullName = input; }}
            />

          </Col>
          <Col md={6}>

            {/*
              Input required validation check with
              isEmail validation and
              library default error messages
            */}
            <Field
              validator="isEmail" required
              label="Email" name="email" placeholder="Email"
              onChange={this.handleChange}
              value={this.state.data.email}
              setRef={(input) => { this.email = input; }}
            />

          </Col>
        </Row>
        <Row>
          <Col md={6}>

            {/*
              Input required validation check with
              isAlphanumeric validation
              and minimum character length validation with
              custom error msg only when minLength validation fail
            */}
            <Field
              validator="isAlphanumeric" required minLength={8}
              minLengthErrMsg="Short passwords are easy to guess. Try one with atleast 8 characters"
              label="Create a password" name="password" type="password" placeholder="Password"
              onChange={this.handleChange}
              value={this.state.data.password}
              setRef={(input) => { this.password = input; }}
            />

          </Col>
          <Col md={6}>

            {/*
              Input required validation check with
              equals validation with
              custom error msg only when equals validation fail
            */}
            <Field
              validator="equals" required comparison={passwordValue}
              validatorErrMsg="These passwords don't match. Try again?"
              label="Confirm password" name="confirmPassword" type="password" placeholder="Password"
              onChange={this.handleChange}
              value={this.state.data.confirmPassword}
              setRef={(input) => { this.confirmPassword = input; }}
            />

          </Col>
        </Row>

        {/*
          Input required validation check with
          custom error msg only when required validation fail
        */}
        <Field
          required
          requiredErrMsg="Enter your address so we can send you awesome stuff"
          label="Address" name="address" placeholder="1234 Main St"
          onChange={this.handleChange}
          value={this.state.data.address}
          setRef={(input) => { this.address = input; }}
        />

        {/*
          No validation
        */}
        <Field
          label="Address 2"
          name="address2" placeholder="Apartment, studio, or floor"
          onChange={this.handleChange}
          value={this.state.data.address2}
          setRef={(input) => { this.address2 = input; }}
        />

        <Row>
          <Col md={6}>

            {/*
              Input required validation check with
              maximum character length validation with
              library default error messages
            */}
            <Field
              maxLength={20} required label="City"
              name="inputCity"
              onChange={this.handleChange}
              value={this.state.data.inputCity}
              setRef={(input) => { this.inputCity = input; }}
            />

          </Col>
          <Col md={3}>

            {/*
              You can declare other input types too
            */}
            <label htmlFor="inputState">State</label>
            <select
              name="inputState" className="form-control"
              onChange={this.handleChange}
              value={this.state.data.inputState ? this.state.data.inputState.value : ''}
            >
              <option>Choose...</option>
              <option value="ALABAMA">ALABAMA</option>
              <option value="ALASKA">ALASKA</option>
              <option value="ARIZONA">ARIZONA</option>
              <option>...</option>
            </select>

          </Col>
          <Col md={3}>

            {/*
              Input required validation check with
              maximum character length validation with
              library default error messages
            */}
            <Field
              validator="isPostalCode" locale="US" required maxLength={10}
              validatorErrMsg="Enter a valid US Zip"
              label="Zip" name="inputZip"
              onChange={this.handleChange}
              value={this.state.data.inputZip}
              setRef={(input) => { this.inputZip = input; }}
            />
          </Col>
        </Row>
        <button
          type="submit" onClick={this.handleSubmit} className="btn btn-primary"
        >Sign up
        </button>
        {this.state.callAPI
          ?
            <pre className="resultBlock">
              {JSON.stringify(formInputData(this.state.data), null, 4)}
            </pre>
          : null
        }
      </form>
    );
  }
}
