import validator from 'validator';
import { validatorDefinition } from '../components/constants';

export default function validation(str, props) {
  const { mandatoryParams, optionalParams } = validatorDefinition[props.validator];
  const mandatoryArgs = mandatoryParams.map(param => (param === 'str' ? str : props[param]));
  const optionalArgs = optionalParams.length > 0 ? optionalParams.map(param => props[param]) : null;

  return validator[props.validator](...mandatoryArgs, ...optionalArgs);
}
