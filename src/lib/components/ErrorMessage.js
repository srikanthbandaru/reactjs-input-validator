import React from 'react';
import PropTypes from 'prop-types';
import HelpBlock from 'react-bootstrap/lib/HelpBlock';
import determineValidatorErrMsgs from '../utils/determineValidatorErrMsgs';

const requiredErrorMessages = props => (
  <HelpBlock>{props.requiredErrMsg ? props.requiredErrMsg : "You can't leave this empty"}</HelpBlock>
);

const validatorErrorMessages = props => <HelpBlock>{determineValidatorErrMsgs(props)}</HelpBlock>;

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

ErrorMessage.propTypes = {
  inputValue: PropTypes.string.isRequired,
};

export default ErrorMessage;
