import validator from 'validator';
import { validatorDefinition } from '../components/constants';

export default function validation(str, props) {
  if (props.required && str.length === 0) {
    return false;
  } else if (props.length && str.length !== props.length) {
    return false;
  } else if (props.minLength && str.length < props.minLength) {
    return false;
  } else if (props.maxLength && str.length > props.maxLength) {
    return false;
  } else if (props.validator) {
    const { mandatoryParams, optionalParams } = validatorDefinition[props.validator];
    const mandatoryArgs = mandatoryParams.map(param => (param === 'str' ? str : props[param]));
    const optionalArgs = optionalParams.length > 0 ? optionalParams.map(param => props[param]) : [];

    return validator[props.validator](...mandatoryArgs, ...optionalArgs);
  }
  return true;
}
