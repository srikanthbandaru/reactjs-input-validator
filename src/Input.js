import React, {Component} from 'react'
import validator from 'validator'
import {errorMessages} from './errorMessages'
import 'bootstrap/dist/css/bootstrap.css'

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''}
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleOnFocus = this.handleOnFocus.bind(this)
  }

  handleInputChange(event) {
    this.setState({value: event.target.value})
    if(this.props.validator) {
      const validationResult = validator[this.props.validator](this.state.value)
      console.log(validationResult);
      if(!validationResult) {
        console.log(errorMessages.isEmail);
        console.log(errorMessages[this.props.validator]);
      }
    }
  }

  handleOnFocus() {
    if (this.props.id !== document.activeElement.id) {
      const validator = this.props.validator;
      console.log(this.props.validator);
    }
  }

  render() {
    return(
      <div>
        <input
          type='text'
          id={this.props.id}
          name="reactjs-input-validator"
          value={this.state.value}
          onChange={this.handleInputChange}
          onFocus={this.handleOnFocus}
        />
      </div>
    )
  }
}
