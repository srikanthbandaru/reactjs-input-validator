import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';
import { supportedInputTypes } from './constants';
import validation from '../utils/validation';
import ErrorMessage from './ErrorMessage';

export default class Input extends Component {
  static isInputTypeSupported(type) {
    return supportedInputTypes.includes(type);
  }

  constructor(props) {
    super(props);
    this.state = { inputValue: '', validationResult: null };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleOnBlur = this.handleOnBlur.bind(this);
    this.handleValidation = this.handleValidation.bind(this);
    this.sendInputData = this.sendInputData.bind(this);
    this.handleOnFocus = this.handleOnFocus.bind(this);
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
        null, inputValue, this.props.name,
        this.handleValidation(inputValue),
        this.props.required,
      );
    }
  }

  handleOnFocus() {
    this.setState({ validationResult: null });
  }

  handleOnBlur() {
    // checking validation result on blur even to display the error/success styles
    const { inputValue } = this.state;
    const { required } = this.props;

    // do the validation only IF (input is empty) AND (input not required) FAILS
    if (!(inputValue === '' && !required)) {
      this.setState({ validationResult: this.handleValidation(inputValue) });
    }
  }

  handleValidation(inputValue) {
    return validation(inputValue, this.props);
  }

  render() {
    const { inputValue, validationResult } = this.state;
    const validationState = ({ true: 'success', false: 'error' })[validationResult] || null;
    const inputClassName = `form-control ${this.props.className}`;

    return (
      <div id="reactjs-input-validator">
        {this.constructor.isInputTypeSupported(this.props.type)
          ?
            <FormGroup controlId={this.props.name} validationState={validationState}>
              {this.props.label && <ControlLabel>{this.props.label}</ControlLabel>}
              <input
                className={inputClassName}
                type={this.props.type}
                placeholder={this.props.placeholder}
                name={this.props.name}
                id={this.props.id}
                value={inputValue}
                onChange={this.handleInputChange}
                onBlur={this.handleOnBlur}
                onFocus={this.handleOnFocus}
                ref={this.props.setRef}
              />
              <FormControl.Feedback />
              {validationResult === false
                ?
                  <ErrorMessage
                    validator={this.props.validator}
                    inputValue={inputValue}
                    requiredErrMsg={this.props.requiredErrMsg}
                    length={this.props.length}
                    lengthErrMsg={this.props.lengthErrMsg}
                    minLength={this.props.minLength}
                    minLengthErrMsg={this.props.minLengthErrMsg}
                    maxLength={this.props.maxLength}
                    maxLengthErrMsg={this.props.maxLengthErrMsg}
                    validatorErrMsg={this.props.validatorErrMsg}
                  />
                :
                  null
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
  className: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  length: PropTypes.number,
  lengthErrMsg: PropTypes.string,
  maxLength: PropTypes.number,
  maxLengthErrMsg: PropTypes.string,
  minLength: PropTypes.number,
  minLengthErrMsg: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  requiredErrMsg: PropTypes.string,
  setRef: PropTypes.func,
  type: PropTypes.string,
  validator: PropTypes.string,
  validatorErrMsg: PropTypes.string,
};

Input.defaultProps = {
  className: '',
  id: null,
  label: null,
  length: null,
  lengthErrMsg: null,
  maxLength: null,
  maxLengthErrMsg: null,
  minLength: null,
  minLengthErrMsg: null,
  onChange: () => {},
  placeholder: '',
  required: false,
  requiredErrMsg: null,
  setRef: () => {},
  type: 'text',
  validator: null,
  validatorErrMsg: null,
};
