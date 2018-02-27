export default function formInputData(data) {
  const inputData = {};
  Object.keys(data).map((item) => {
    inputData[item] = data[item].value;

    return inputData;
  });
  return inputData;
}
