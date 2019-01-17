import React from 'react';
import PropTypes from 'prop-types';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';
import ErrorMessage from './ErrorMessage';
import { supportedInputTypes } from './constants';

export default class TextArea extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  /*eslint-disable*/
  onChangeHandler(event) {    
    this.props.handleInputChange(event);
    if (this.props.autoExpand) {   
      event.target.rows = this.props.rows;   
      const computedRows = ((event.target.scrollHeight - (32 + (10 * this.props.rows===1 ? 0 : this.props.rows))) / 19);      
      event.target.rows = Math.min((computedRows < 1) ? 1 : this.props.rows + computedRows, this.props.maxRows);
    }
    return false
  }

  render() {
    return (
      <div>
        {supportedInputTypes.includes(this.props.type)
            ?
              <FormGroup controlId={this.props.name} validationState={this.props.validationState}>
                {this.props.label && <ControlLabel>{this.props.label}</ControlLabel>}
                <textarea
                  rows={this.props.rows}
                  minRows={this.props.rows}
                  className={this.props.textAreaClassName}
                  placeholder={this.props.placeholder}
                  name={this.props.name}
                  id={this.props.id}
                  value={this.props.inputValue}
                  onChange={this.onChangeHandler}
                  onBlur={this.props.setFieldValidation}
                  onFocus={this.props.handleOnFocus}
                  ref={this.props.setRef}
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

TextArea.propTypes = {
  customValidatorErrMsg: PropTypes.string,
  handleInputChange: PropTypes.func.isRequired,
  handleOnFocus: PropTypes.func.isRequired,
  id: PropTypes.string,
  inputValue: PropTypes.string,
  label: PropTypes.string,
  length: PropTypes.number,
  lengthErrMsg: PropTypes.string,
  maxLength: PropTypes.number,
  maxLengthErrMsg: PropTypes.string,
  maxRows: PropTypes.number,
  minLength: PropTypes.number,
  minLengthErrMsg: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  requiredErrMsg: PropTypes.string,
  rows: PropTypes.number,
  setFieldValidation: PropTypes.func.isRequired,
  setRef: PropTypes.func,
  textAreaClassName: PropTypes.string,
  type: PropTypes.string,
  validationResult: PropTypes.bool.isRequired,
  validationState: PropTypes.arrayOf(true, false, null).isRequired,
  validator: PropTypes.string,
  validatorErrMsg: PropTypes.string,
  value: PropTypes.object, // eslint-disable-line
};

TextArea.defaultProps = {
  customValidatorErrMsg: null,
  id: null,
  inputValue: '',
  label: null,
  length: null,
  lengthErrMsg: null,
  maxLength: null,
  maxLengthErrMsg: null,
  maxRows: 20,
  minLength: null,
  minLengthErrMsg: null,
  placeholder: '',
  requiredErrMsg: null,
  rows: 1,
  setRef: () => {},
  textAreaClassName: '',
  type: 'text',
  validator: null,
  validatorErrMsg: null,
  value: { value: '' },
};