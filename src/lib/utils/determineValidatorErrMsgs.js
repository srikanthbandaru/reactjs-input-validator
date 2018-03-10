import { errorMessages } from '../components/constants';

export default function validatorErrorMessages(props) {
  const {
    inputValue,
    length, lengthErrMsg,
    minLength, minLengthErrMsg,
    maxLength, maxLengthErrMsg,
    validator, validatorErrMsg,
  } = props;

  if (length && (inputValue.length !== length)) { // length error messages
    return lengthErrMsg || `This should be ${length} characters`;
  } else if (minLength && (inputValue.length < minLength)) { // minimum length error messages
    return minLengthErrMsg || `Enter atleast ${props.minLength} characters`;
  } else if (maxLength && (inputValue.length > maxLength)) { // maximum length error messages
    return maxLengthErrMsg || `Must have atmost ${props.maxLength} characters`;
  }
  return validatorErrMsg || `${errorMessages[validator]}`; // validator error message
}
