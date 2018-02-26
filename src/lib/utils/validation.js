import validator from 'validator'
import {validatorDefinition} from '../components/constants'

export default function validation(str, props) {
  const mandatoryParams = validatorDefinition[props.validator].mandatoryParams
  const optionalParams = validatorDefinition[props.validator].optionalParams

  let mandatoryArgs =  mandatoryParams.map(param => {
    return param === 'str' ? `${str}` : `${props[param]}`
  })

  let optionalArgs = optionalParams.length > 0 ? optionalParams.map(param => {
    return props[param]
  }) : null

  return validator[props.validator](...mandatoryArgs, ...optionalArgs)
}
