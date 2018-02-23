import React, {Component} from 'react'
import PropTypes from 'prop-types'
import validator from 'validator'
import FormGroup from 'react-bootstrap/lib/FormGroup'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import FormControl from 'react-bootstrap/lib/FormControl'
import HelpBlock from 'react-bootstrap/lib/HelpBlock'
import {errorMessages} from './errorMessages'
import {supportedTypes} from './constants'

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {inputValue: '', validationResult: ''}
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleOnBlur = this.handleOnBlur.bind(this)
    this.handleValidation = this.handleValidation.bind(this)
  }

  handleInputChange(event) {
    this.setState({
      inputValue: event.target.value
    })

    // If the user wants to have access to the form data
    if(this.props.onChange) this.props.onChange(event.target.value, event.target.name, this.handleValidation(event.target.value));
  }

  handleOnBlur() {
    if(this.props.validator) {
      this.setState({ validationResult: this.handleValidation(this.state.inputValue) })
    }
  }

  handleValidation(inputValue) {
    return validator[this.props.validator](inputValue)
  }

  isInputTypeSupported(type) {
    if (type === undefined) { // if the type prop is not passed, returning ture to render type="text"
      return true
    }
    return supportedTypes.includes(type)
  }

  render() {
    const validationState = this.state.validationResult === true
    ? 'success'
    :  this.state.validationResult === false
        ? 'error'
        : null

    const inputType = this.props.type ? this.props.type : 'text'

    return(
      <div>
        {this.isInputTypeSupported(this.props.type)
          ?
            <FormGroup controlId={this.props.name} validationState={validationState}>
              {this.props.label ? <ControlLabel>{this.props.label}</ControlLabel> : null}
              <input
                className="form-control"
                type={inputType}
                placeholder={this.props.placeholder}
                name={this.props.name}
                value={this.state.inputValue}
                onChange={this.handleInputChange}
                onBlur={this.handleOnBlur}
              />
              <FormControl.Feedback />
              {this.state.validationResult === false
                ? <HelpBlock>
                    {errorMessages[this.props.validator]}
                  </HelpBlock>
                : null
              }
            </FormGroup>
          :
            null
        }
      </div>
    )
  }
}

Input.propTypes = {
  validator: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}
