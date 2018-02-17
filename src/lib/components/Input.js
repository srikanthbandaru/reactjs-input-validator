import React, {Component} from 'react'
import PropTypes from 'prop-types'
import validator from 'validator'
import {errorMessages} from './errorMessages'
import './Input.css'

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
    const styles = this.state.validationResult === true
    ? 'valid-input'
    :  this.state.validationResult === false
        ? 'invalid-input'
        : ''
    const inputClassName = `input-validator-form-control ${this.props.className} ${styles}`

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
        {
          this.state.validationResult === true
          ? <div className="valid-input-feedback">Looks good!</div>
          : this.state.validationResult === false
            ? <div className="invalid-input-feedback">{errorMessages[this.props.validator]}</div>
            : null
        }
      </div>
    )
  }
}

Input.propTypes = {
  validator: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}
