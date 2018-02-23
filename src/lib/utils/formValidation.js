export const formValidation = (data) => {
  var formValidation = {};
  Object.keys(data).map(item => {
    formValidation[item] = data[item].validation

    return formValidation;
  })

  var isFormValid = Object.values(formValidation)

  if(isFormValid.includes(false)) {
     return false
  } else if (isFormValid.length === 0){
    return null
  }

  return true
}
