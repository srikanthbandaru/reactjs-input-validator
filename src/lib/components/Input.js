import React, {Component} from 'react'
import PropTypes from 'prop-types'
import validator from 'validator'
import {errorMessages} from './errorMessages'
import 'bootstrap/dist/css/bootstrap.css'

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {inputValue: '', validationResult: ''}
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleOnBlur = this.handleOnBlur.bind(this)
  }

  handleInputChange(event) {
    this.setState({
      inputValue: event.target.value
    })
    if(this.props.onChange) this.props.onChange(event.target.value, event.target.name);
  }

  handleOnBlur() {
    if(this.props.validator) {
      const validationResult = validator[this.props.validator](this.state.inputValue)
      this.setState({ validationResult: validationResult })
    }
  }

  render() {
    const styles = this.state.validationResult
    ? 'is-valid'
    :  this.state.validationResult === ''
        ? ''
        : 'is-invalid'
    const inputClassName = `form-control ${this.props.className} ${styles}`

    return(
      <div>
        <input
          className={inputClassName}
          type='text'
          name={this.props.name}
          value={this.state.inputValue}
          onChange={this.handleInputChange}
          onBlur={this.handleOnBlur}
        />
        <div className="invalid-feedback">
          {errorMessages[this.props.validator]}
        </div>
        <div className="valid-feedback">
          Looks good!
        </div>
      </div>
    )
  }
}

Input.propTypes = {
  validator: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}
