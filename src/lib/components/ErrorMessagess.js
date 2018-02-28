/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';
import HelpBlock from 'react-bootstrap/lib/HelpBlock';
import { errorMessages } from './constants';

export default function ErrorMessagess(props) {
  return (
    <div>
      {props.validationResult === false
      ?
        props.inputValue === ''
          ? <HelpBlock>{errorMessages.isEmpty}</HelpBlock>
          : <HelpBlock>{errorMessages[props.validator]}</HelpBlock>
      : null
      }
    </div>
  );
}

ErrorMessagess.propTypes = {
  validationResult: PropTypes.bool,
  inputValue: PropTypes.string.isRequired,
  validator: PropTypes.string.isRequired,
};

ErrorMessagess.defaultProps = {
  validationResult: null,
};
