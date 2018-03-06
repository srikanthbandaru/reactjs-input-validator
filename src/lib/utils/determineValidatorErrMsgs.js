import { errorMessages } from '../components/constants';

export default function validatorErrorMessages(props) {
  // length error messages
  if (props.length && !props.lengthErrMsg && (props.inputValue.length !== props.length)) {
    return `This should be ${props.length} characters`;
  } else if (props.length && props.lengthErrMsg && (props.inputValue.length !== props.length)) {
    return `${props.lengthErrMsg}`;
  } else if (props.minLength && !props.minLengthErrMsg && // minimum length error messages
              (props.inputValue.length < props.minLength)) {
    return `Enter atleast ${props.minLength} characters`;
  } else if (props.minLength && props.minLengthErrMsg &&
              (props.inputValue.length < props.minLength)) {
    return `${props.minLengthErrMsg}`;
  } else if (props.maxLength && !props.maxLengthErrMsg && // maximum length error messages
              (props.inputValue.length > props.maxLength)) {
    return `Must have atmost ${props.maxLength} characters`;
  } else if (props.maxLength && props.maxLengthErrMsg &&
              (props.inputValue.length > props.maxLength)) {
    return `${props.maxLengthErrMsg}`;
  } else if (props.validatorErrMsg) {
    return props.validatorErrMsg;
  }
  return `${errorMessages[props.validator]}`; // validator error message
}
