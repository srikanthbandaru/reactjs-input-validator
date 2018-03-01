import React from 'react';
import PropTypes from 'prop-types';
import HelpBlock from 'react-bootstrap/lib/HelpBlock';
import { errorMessages } from './constants';

const requiredErrorMessages = props => (
  <HelpBlock>{props.requiredErrMsg ? props.requiredErrMsg : "You can't leave this blank"}</HelpBlock>
);

const validatorErrorMessages = props => <HelpBlock>{errorMessages[props.validator]}</HelpBlock>;

const ErrorMessage = props => (
  <div>
    {props.inputValue === ''
      ? requiredErrorMessages(props)
      : validatorErrorMessages(props)
    }
  </div>
);

requiredErrorMessages.propTypes = {
  requiredErrMsg: PropTypes.string.isRequired,
};

validatorErrorMessages.propTypes = {
  validator: PropTypes.string.isRequired,
};

ErrorMessage.propTypes = {
  inputValue: PropTypes.string.isRequired,
};

export default ErrorMessage;
