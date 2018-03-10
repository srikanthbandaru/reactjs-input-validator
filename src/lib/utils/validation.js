import validator from 'validator';
import { validatorDefinition } from '../components/constants';

export default function validation(str, props) {
  const {
    length, minLength, maxLength, required,
  } = props;
  const isEmpty = (required && str.length === 0);
  const isDifferentLength = (length && str.length !== length);
  const isMinLength = (minLength && str.length < minLength);
  const isMaxLength = (maxLength && str.length > maxLength);
  let isValid = true;

  if (props.validator) {
    const { mandatoryParams, optionalParams } = validatorDefinition[props.validator];
    const mandatoryArgs = mandatoryParams.map(param => (param === 'str' ? str : props[param]));
    const optionalArgs = optionalParams.length > 0 ? optionalParams.map(param => props[param]) : [];

    isValid = validator[props.validator](...mandatoryArgs, ...optionalArgs);
  }
  return !(isEmpty || isDifferentLength || isMinLength || isMaxLength || !isValid);
}
