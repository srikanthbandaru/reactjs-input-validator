export default function formValidation(data) {
  const validationStatus = {};
  Object.keys(data).map((item) => {
    // if the input field is required OR if some value is entered in the field,
    // map the validation result of that field to field validation status variable
    // else, (if the field is not required AND no data is entered) return true for field validation
    validationStatus[item] = (data[item].isRequired) || (data[item].value.length > 0)
      ? data[item].validation
      : true;

    return validationStatus;
  });

  const isFormValid = Object.keys(validationStatus).map(k => validationStatus[k]);
  if (isFormValid.includes(false) || isFormValid.includes(undefined) || isFormValid.length === 0) {
    return false;
  }

  return true;
}
