import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';
import HelpBlock from 'react-bootstrap/lib/HelpBlock';
import errorMessages from './errorMessages';
import { supportedInputTypes } from './constants';
import validation from '../utils/validation';

export default class Input extends Component {
  static isInputTypeSupported(type) {
    return supportedInputTypes.includes(type);
  }

  constructor(props) {
    super(props);
    this.state = { inputValue: '', validationResult: '' };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleOnBlur = this.handleOnBlur.bind(this);
    this.handleValidation = this.handleValidation.bind(this);
    this.sendInputData = this.sendInputData.bind(this);
  }

  componentDidMount() {
    this.sendInputData();
  }

  handleInputChange(event) {
    this.setState({
      inputValue: event.target.value,
    });
    this.sendInputData(event);

    // reset the validation result to null IF (input field is empty) AND (input is not required)
    if (event.target.value === '' && !this.props.required) {
      this.setState({ validationResult: null });
    }
  }

  sendInputData(event) {
    // If the user wants to have access to the input data and input validation
    const inputValue = event ? event.target.value : this.state.inputValue;
    if (this.props.onChange) {
      this.props.onChange(
        inputValue, this.props.name,
        this.handleValidation(inputValue),
        this.props.required,
      );
    }
  }

  handleOnBlur() {
    // checking validation result on blur even to display the error/success styles
    const { inputValue } = this.state;
    const { required } = this.props;

    // set the validation result only IF (input is empty) AND (input not required) FAILS
    if (!(inputValue === '' && !required)) {
      this.setState({ validationResult: this.handleValidation(inputValue) });
    }
  }

  handleValidation(inputValue) {
    return validation(inputValue, this.props);
  }

  render() {
    const validationState =
    (this.state.validationResult === true) // eslint-disable-line no-nested-ternary
      ? 'success'
      : (this.state.validationResult === false)
        ? 'error'
        : null;

    const inputType = this.props.type ? this.props.type : 'text';

    return (
      <div>
        {this.constructor.isInputTypeSupported(this.props.type)
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
                ?
                  <HelpBlock>
                    {errorMessages[this.props.validator]}
                  </HelpBlock>
                : null
              }
            </FormGroup>
          :
            null
        }
      </div>
    );
  }
}

Input.propTypes = {
  validator: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  required: PropTypes.bool,
};

Input.defaultProps = {
  placeholder: '',
  type: 'text',
  label: null,
  onChange: () => {},
  required: false,
};
