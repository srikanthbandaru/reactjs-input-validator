export function formInputData(data) {
  var formInputData = {};
  Object.keys(data).map(item => {
    formInputData[item] = data[item].value

    return formInputData;
  })
  return formInputData
}
