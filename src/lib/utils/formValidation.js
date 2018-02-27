export default function formValidation(data) {
  const validationStatus = {};
  Object.keys(data).map((item) => {
    validationStatus[item] = data[item].validation;

    return validationStatus;
  });

  const isFormValid = Object.values(validationStatus);

  if (isFormValid.includes(false) || isFormValid.includes(undefined)) {
    return false;
  } else if (isFormValid.length === 0) {
    return null;
  }

  return true;
}
