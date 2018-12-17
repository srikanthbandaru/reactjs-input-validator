import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import autosize from 'autosize';
import { supportedInputTypes } from './constants';
import validation from '../utils/validation';
import Input from './Input';
import TextArea from './TextArea';

export default class Field extends Component {
  static isInputTypeSupported(type) {
    return supportedInputTypes.includes(type);
  }

  constructor(props) {
    super(props);
    this.state = { validationResult: null };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.setFieldValidation = this.setFieldValidation.bind(this);
    this.handleValidation = this.handleValidation.bind(this);
    this.sendInputData = this.sendInputData.bind(this);
    this.handleOnFocus = this.handleOnFocus.bind(this);
  }
/*eslint-disable*/
  componentDidMount() {
    this.sendInputData();
  }

  setFieldValidation(event) {
    // checking validation result on blur even to display the error/success styles
    const inputValue = (event && event.target.value) || this.props.value.value;
    const { required } = this.props;

    // do the validation only IF (input is empty) AND (input not required) FAILS
    if (!(inputValue === '' && !required)) {
      this.setState({ validationResult: this.handleValidation(inputValue) });
    }
    this.sendInputData();
  }

  handleInputChange(event) {
    this.sendInputData(event);
    if (this.props.validateOnChange) this.setFieldValidation(event);
  }

  sendInputData(event) {
    // If the user wants to have access to the input data and input validation
    if (this.props.onChange) {
      const initialInputValue = event ? event.target.value : this.props.value.value;
      this.props.onChange(
        event, initialInputValue, this.props.name,
        this.handleValidation(initialInputValue),
        this.props.required,
      );
    }
  }

  handleOnFocus() {
    this.setState({ validationResult: null });
  }

  handleValidation(inputValue) {
    if (this.props.customValidator === false) return this.props.customValidator;
    return validation(inputValue, this.props);
  }

  renderElement(validationState, validationResult) {
    switch (this.props.render) {
      case 'Input':
        return (
          <Input
            handleInputChange={this.handleInputChange}
            setFieldValidation={this.setFieldValidation}
            handleOnFocus={this.handleOnFocus}
            inputClassName={`form-control ${this.props.className}`}
            inputValue={this.props.value.value}
            validationState={validationState}
            validationResult={validationResult}
            isInputTypeSupported={this.constructor.isInputTypeSupported}
            {...this.props}
          />
        );
      case 'TextArea':
        return (
          <TextArea
            handleInputChange={this.handleInputChange}
            setFieldValidation={this.setFieldValidation}
            handleOnFocus={this.handleOnFocus}
            textAreaClassName={`form-control ${this.props.autoExpand ? this.props.autoExpand : ''} ${this.props.className}`}
            inputValue={this.props.value.value}
            validationState={validationState}
            validationResult={validationResult}
            isInputTypeSupported={this.constructor.isInputTypeSupported}
            {...this.props}
          />
        );
      default:
        return null;
    }
  }

  render() {
    const { validationResult } = this.state;
    const validationState = ({ true: 'success', false: 'error' })[validationResult] || null;

    return (
      <div id="reactjs-input-validator">
        {this.renderElement(validationState, validationResult)}
      </div>
    );
  }
}

Field.propTypes = {
  autoExpand: PropTypes.bool,
  className: PropTypes.string,
  customValidator: PropTypes.bool,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  render: PropTypes.string,
  required: PropTypes.bool,
  rows: PropTypes.number,
  validateOnChange: PropTypes.bool,
  value: PropTypes.object, // eslint-disable-line
};

Field.defaultProps = {
  autoExpand: false,
  className: '',
  customValidator: null,
  onChange: () => {},
  render: 'Input',
  required: false,
  rows: 1,
  validateOnChange: false,
  value: { value: '' },
};