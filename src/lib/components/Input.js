import React from 'react';
import PropTypes from 'prop-types';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';
import ErrorMessage from './ErrorMessage';
import { supportedInputTypes } from './constants';

export default class Input extends React.Component {
  componentDidUpdate(prevProps) {
    if (
      this.props.shouldValidateInputs &&
      this.props.shouldValidateInputs !== prevProps.shouldValidateInputs
    ) {
      this[this.props.name].focus();
      this[this.props.name].blur();
    }
  }

  render() {
    return (
      <div>
        {supportedInputTypes.includes(this.props.type)
              ?
                <FormGroup controlId={this.props.name} validationState={this.props.validationState}>
                  {this.props.label && <ControlLabel>{this.props.label}</ControlLabel>}
                  <input
                    {...this.props}
                    className={this.props.inputClassName}
                    type={this.props.type}
                    placeholder={this.props.placeholder}
                    name={this.props.name}
                    id={this.props.id}
                    value={this.props.inputValue}
                    onChange={this.props.handleInputChange}
                    onBlur={this.props.handleOnBlur}
                    onFocus={this.props.handleOnFocus}
                    ref={(input) => { this[this.props.name] = input; }}
                    onKeyPress={this.props.onKeyPress}
                  />
                  <FormControl.Feedback />
                  {this.props.validationResult === false &&
                    <ErrorMessage
                      validator={this.props.validator}
                      inputValue={this.props.inputValue}
                      requiredErrMsg={this.props.requiredErrMsg}
                      length={this.props.length}
                      lengthErrMsg={this.props.lengthErrMsg}
                      minLength={this.props.minLength}
                      minLengthErrMsg={this.props.minLengthErrMsg}
                      maxLength={this.props.maxLength}
                      maxLengthErrMsg={this.props.maxLengthErrMsg}
                      validatorErrMsg={this.props.validatorErrMsg}
                      customValidatorErrMsg={this.props.customValidatorErrMsg}
                    />
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
  customValidatorErrMsg: PropTypes.string,
  handleInputChange: PropTypes.func.isRequired,
  handleOnBlur: PropTypes.func.isRequired,
  handleOnFocus: PropTypes.func.isRequired,
  id: PropTypes.string,
  inputClassName: PropTypes.string,
  inputValue: PropTypes.string,
  label: PropTypes.string,
  length: PropTypes.number,
  lengthErrMsg: PropTypes.string,
  maxLength: PropTypes.number,
  maxLengthErrMsg: PropTypes.string,
  minLength: PropTypes.number,
  minLengthErrMsg: PropTypes.string,
  name: PropTypes.string.isRequired,
  onKeyPress: PropTypes.func,
  placeholder: PropTypes.string,
  requiredErrMsg: PropTypes.string,
  setFieldValidation: PropTypes.func.isRequired,
  shouldValidateInputs: PropTypes.bool,
  type: PropTypes.string,
  validationResult: PropTypes.bool.isRequired,
  validationState: PropTypes.arrayOf(true, false, null).isRequired,
  validator: PropTypes.string,
  validatorErrMsg: PropTypes.string,
  value: PropTypes.object, // eslint-disable-line
};

Input.defaultProps = {
  customValidatorErrMsg: null,
  id: null,
  inputClassName: '',
  inputValue: '',
  label: null,
  length: null,
  lengthErrMsg: null,
  maxLength: null,
  maxLengthErrMsg: null,
  minLength: null,
  minLengthErrMsg: null,
  onKeyPress: () => {},
  placeholder: '',
  requiredErrMsg: null,
  shouldValidateInputs: false,
  type: 'text',
  validator: null,
  validatorErrMsg: null,
  value: { value: '' },
};
