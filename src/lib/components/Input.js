import React from 'react';
import PropTypes from 'prop-types';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';
import ErrorMessage from './ErrorMessage';
import { supportedInputTypes } from './constants';

export default function Input(props) {
  return (
    <div>
      {supportedInputTypes.includes(props.type)
            ?
              <FormGroup controlId={props.name} validationState={props.validationState}>
                {props.label && <ControlLabel>{props.label}</ControlLabel>}
                <input
                  className={props.inputClassName}
                  type={props.type}
                  placeholder={props.placeholder}
                  name={props.name}
                  id={props.id}
                  value={props.inputValue}
                  onChange={props.handleInputChange}
                  onBlur={props.setFieldValidation}
                  onFocus={props.handleOnFocus}
                  ref={props.setRef}
                  onKeyPress={props.onKeyPress}
                />
                <FormControl.Feedback />
                {props.validationResult === false &&
                  <ErrorMessage
                    validator={props.validator}
                    inputValue={props.inputValue}
                    requiredErrMsg={props.requiredErrMsg}
                    length={props.length}
                    lengthErrMsg={props.lengthErrMsg}
                    minLength={props.minLength}
                    minLengthErrMsg={props.minLengthErrMsg}
                    maxLength={props.maxLength}
                    maxLengthErrMsg={props.maxLengthErrMsg}
                    validatorErrMsg={props.validatorErrMsg}
                    customValidatorErrMsg={props.customValidatorErrMsg}
                  />
                }
              </FormGroup>
            :
              null
          }
    </div>

  );
}

Input.propTypes = {
  customValidatorErrMsg: PropTypes.string,
  handleInputChange: PropTypes.func.isRequired,
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
  setRef: PropTypes.func,
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
  setRef: () => {},
  type: 'text',
  validator: null,
  validatorErrMsg: null,
  value: { value: '' },
};
