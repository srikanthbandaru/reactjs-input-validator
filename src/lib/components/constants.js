export const supportedInputTypes = [
  'email', 'password', 'text',
  'color', 'date', 'datetime-local', 'month', 'number', 'range', 'hidden', 'search', 'tel', 'url', 'week',
];

export const errorMessages = {
  isAlpha: 'Please enter only letters',
  isAlphanumeric: 'Please enter only letters and numbers',
  isAscii: 'Please enter ASCII characters only',
  isBase64: 'Please enter a string that is base64 encoded',
  isBoolean: 'Please enter a boolean value',
  isCreditCard: 'Please enter a valid credit card number',
  isCurrency: 'Please enter a valid currency amount',
  isDataURI: 'Please enter a valid data uri format',
  isDecimal: 'Please enter a valid decimal number',
  isEmail: 'Please enter a valid email address',
  isEmpty: 'please leave this empty',
  isFQDN: 'Please enter a valid fully qualified domain name',
  isFloat: 'Please enter a valid float value',
  isFullWidth: 'Please enter atleast one full-width character',
  isHalfWidth: 'Please enter atleast one half-width character',
  isHexColor: 'Please enter a valid hexadecimal color',
  isHexadecimal: 'Please enter a valid hexadecimal number',
  isISSN: 'Please enter a valid ISSN',
  isISIN: 'Please enter a valid ISIN',
  isISO8601: 'Please enter a valid ISO 8601 date',
  isISO31661Alpha2: 'Please enter a valid ISO 3166-1 alpha-2 officially assigned country code',
  isISRC: 'Please enter a valid ISRC',
  isInt: 'Please enter only an integer',
  isJSON: 'Please enter a valid JSON',
  isLatLong: 'Please enter a valid latitude-longitude coordinate',
  isLowercase: 'Please enter lowercase characters only',
  isMACAddress: 'Please enter a valid MAC address',
  isMD5: 'Please enter a valid MD5 hash',
  isMimeType: 'Please enter a valid MIME type format',
  isMongoId: 'Please enter a valid hex-encoded representation of a MongoDB ObjectId',
  isMultibyte: 'Please enter atleast one multibyte character',
  isNumeric: 'Please enter only numbers',
  isPort: 'Please enter a valid port number',
  isSurrogatePair: 'Please enter atlease one surrogate pair characters',
  isURL: 'Please enter a valid URL',
  isUUID: 'Please enter a valid UUID',
  isUppercase: 'Please enter only UPPERCASE characters',
  isVariableWidth: 'Please enter a mixture of full and half-width characters',
};

export const validatorDefinition = {
  contains: { mandatoryParams: ['str', 'seed'], optionalParams: [] },
  equals: { mandatoryParams: ['str', 'comparison'], optionalParams: [] },
  isAfter: { mandatoryParams: ['str'], optionalParams: ['date'] },
  isAlpha: { mandatoryParams: ['str'], optionalParams: ['locale'] },
  isAlphanumeric: { mandatoryParams: ['str'], optionalParams: ['locale'] },
  isAscii: { mandatoryParams: ['str'], optionalParams: [] },
  isBase64: { mandatoryParams: ['str'], optionalParams: [] },
  isBefore: { mandatoryParams: ['str'], optionalParams: ['date'] },
  isBoolean: { mandatoryParams: ['str'], optionalParams: [] },
  isByteLength: { mandatoryParams: ['str'], optionalParams: ['options'] },
  isCreditCard: { mandatoryParams: ['str'], optionalParams: [] },
  isCurrency: { mandatoryParams: ['str'], optionalParams: ['options'] },
  isDataURI: { mandatoryParams: ['str'], optionalParams: [] },
  isDecimal: { mandatoryParams: ['str'], optionalParams: ['options'] },
  isDivisibleBy: { mandatoryParams: ['str', 'number'], optionalParams: [] },
  isEmail: { mandatoryParams: ['str'], optionalParams: ['options'] },
  isEmpty: { mandatoryParams: ['str'], optionalParams: [] },
  isFQDN: { mandatoryParams: ['str'], optionalParams: ['options'] },
  isFloat: { mandatoryParams: ['str'], optionalParams: ['options'] },
  isFullWidth: { mandatoryParams: ['str'], optionalParams: [] },
  isHalfWidth: { mandatoryParams: ['str'], optionalParams: [] },
  isHash: { mandatoryParams: ['str', 'algorithm'], optionalParams: [] },
  isHexColor: { mandatoryParams: ['str'], optionalParams: [] },
  isHexadecimal: { mandatoryParams: ['str'], optionalParams: [] },
  isIP: { mandatoryParams: ['str'], optionalParams: ['version'] },
  isISBN: { mandatoryParams: ['str'], optionalParams: ['version'] },
  isISIN: { mandatoryParams: ['str'], optionalParams: [] },
  isISO31661Alpha2: { mandatoryParams: ['str'], optionalParams: [] },
  isISO8601: { mandatoryParams: ['str'], optionalParams: [] },
  isISRC: { mandatoryParams: ['str'], optionalParams: [] },
  isISSN: { mandatoryParams: ['str'], optionalParams: ['options'] },
  isIn: { mandatoryParams: ['str', 'values'], optionalParams: [] },
  isInt: { mandatoryParams: ['str'], optionalParams: ['options'] },
  isJSON: { mandatoryParams: ['str'], optionalParams: [] },
  isLatLong: { mandatoryParams: ['str'], optionalParams: [] },
  isLength: { mandatoryParams: ['str'], optionalParams: ['options'] },
  isLowercase: { mandatoryParams: ['str'], optionalParams: [] },
  isMACAddress: { mandatoryParams: ['str'], optionalParams: [] },
  isMD5: { mandatoryParams: ['str'], optionalParams: [] },
  isMimeType: { mandatoryParams: ['str'], optionalParams: [] },
  isMobilePhone: { mandatoryParams: ['str', 'locale'], optionalParams: ['options'] },
  isMongoId: { mandatoryParams: ['str'], optionalParams: [] },
  isMultibyte: { mandatoryParams: ['str'], optionalParams: [] },
  isNumeric: { mandatoryParams: ['str'], optionalParams: [] },
  isPort: { mandatoryParams: ['str'], optionalParams: [] },
  isPostalCode: { mandatoryParams: ['str', 'locale'], optionalParams: [] },
  isSurrogatePair: { mandatoryParams: ['str'], optionalParams: [] },
  isURL: { mandatoryParams: ['str'], optionalParams: ['options'] },
  isUUID: { mandatoryParams: ['str'], optionalParams: ['version'] },
  isUppercase: { mandatoryParams: ['str'], optionalParams: [] },
  isVariableWidth: { mandatoryParams: ['str'], optionalParams: [] },
  isWhitelisted: { mandatoryParams: ['str', 'chars'], optionalParams: [] },
  matches: { mandatoryParams: ['str', 'pattern'], optionalParams: ['modifiers'] },
};

export const validatorTestArgs = {
  contains: {
    valid: { mandatoryArgs: { str: 'foo bar', seed: 'foo' }, optionalArgs: {} },
    inValid: { mandatoryArgs: { str: 'foo', seed: 'bar' }, optionalArgs: {} },
  },
  equals: {
    valid: { mandatoryArgs: { str: 'abc', comparison: 'abc' }, optionalArgs: {} },
    inValid: { mandatoryArgs: { str: 'abc', comparison: 'def' }, optionalArgs: {} },
  },
  isAfter: {
    valid: { mandatoryArgs: { str: '03/03/2021' }, optionalArgs: { date: '' } },
    inValid: { mandatoryArgs: { str: '03/02/2018' }, optionalArgs: { date: '' } },
  },
  isAlpha: {
    valid: { mandatoryArgs: { str: 'foobar' }, optionalArgs: { locale: '' } },
    inValid: { mandatoryArgs: { str: 'foo123' }, optionalArgs: { locale: '' } },
  },
  isAlphanumeric: {
    valid: { mandatoryArgs: { str: 'foobar123' }, optionalArgs: { locale: '' } },
    inValid: { mandatoryArgs: { str: 'foobar!@#' }, optionalArgs: { locale: '' } },
  },
  isAscii: {
    valid: { mandatoryArgs: { str: 'foobar' }, optionalArgs: {} },
    inValid: { mandatoryArgs: { str: 'ｆｏｏ' }, optionalArgs: {} },
  },
  isBase64: {
    valid: { mandatoryArgs: { str: 'c3Jp' }, optionalArgs: {} },
    inValid: { mandatoryArgs: { str: 'foo' }, optionalArgs: {} },
  },
  isBefore: {
    valid: { mandatoryArgs: { str: '03/03/2017' }, optionalArgs: { date: '' } },
    inValid: { mandatoryArgs: { str: '03/03/2025' }, optionalArgs: { date: '' } },
  },
  isBoolean: {
    valid: { mandatoryArgs: { str: 'true' }, optionalArgs: {} },
    inValid: { mandatoryArgs: { str: 'foo bar' }, optionalArgs: {} },
  },
  isByteLength: {
    valid: { mandatoryArgs: { str: 'abc' }, optionalArgs: { options: { min: 3, max: 5 } } },
    inValid: { mandatoryArgs: { str: 'abcdefg' }, optionalArgs: { options: { min: 3, max: 5 } } },
  },
  isCreditCard: {
    valid: { mandatoryArgs: { str: '4111111111111111' }, optionalArgs: {} },
    inValid: { mandatoryArgs: { str: '3213' }, optionalArgs: {} },
  },
  isCurrency: {
    valid: { mandatoryArgs: { str: '$99.99' }, optionalArgs: { options: '' } },
    inValid: { mandatoryArgs: { str: '2.99$' }, optionalArgs: { options: '' } },
  },
  isDataURI: {
    valid: { mandatoryArgs: { str: 'data:,foo bar!' }, optionalArgs: {} },
    inValid: { mandatoryArgs: { str: 'https://www.google.com' }, optionalArgs: {} },
  },
  isDecimal: {
    valid: { mandatoryArgs: { str: '99.90' }, optionalArgs: { options: '' } },
    inValid: { mandatoryArgs: { str: '99,9' }, optionalArgs: { options: '' } },
  },
  isDivisibleBy: {
    valid: { mandatoryArgs: { str: '4', number: '2' }, optionalArgs: {} },
    inValid: { mandatoryArgs: { str: '5', number: '2' }, optionalArgs: {} },
  },
  isEmail: {
    valid: { mandatoryArgs: { str: 'foo@bar.com' }, optionalArgs: { options: '' } },
    inValid: { mandatoryArgs: { str: 'foo@bar' }, optionalArgs: { options: '' } },
  },
  // isEmpty: {
  //   valid: { mandatoryArgs: { str: '' }, optionalArgs: {} },
  //   inValid: { mandatoryArgs: { str: '' }, optionalArgs: {} },
  // },
  isFQDN: {
    valid: { mandatoryArgs: { str: 'foobar.com' }, optionalArgs: { options: '' } },
    inValid: { mandatoryArgs: { str: '127.0.0.0' }, optionalArgs: { options: '' } },
  },
  isFloat: {
    valid: { mandatoryArgs: { str: '-0.2345' }, optionalArgs: { options: '' } },
    inValid: { mandatoryArgs: { str: 'foobar' }, optionalArgs: { options: '' } },
  },
  isFullWidth: {
    valid: { mandatoryArgs: { str: 'ｆｏｏ ｂａｒ' }, optionalArgs: {} },
    inValid: { mandatoryArgs: { str: 'foo bar' }, optionalArgs: {} },
  },
  isHalfWidth: {
    valid: { mandatoryArgs: { str: 'foobar123' }, optionalArgs: {} },
    inValid: { mandatoryArgs: { str: 'ｆｏｏ' }, optionalArgs: {} },
  },
  isHash: {
    valid: { mandatoryArgs: { str: '327b6f07435811239bc47e1544353273', algorithm: 'md5' }, optionalArgs: {} },
    inValid: { mandatoryArgs: { str: 'foo bar', algorithm: 'md5' }, optionalArgs: {} },
  },
  isHexColor: {
    valid: { mandatoryArgs: { str: '#bb9fd6' }, optionalArgs: {} },
    inValid: { mandatoryArgs: { str: '#foobar' }, optionalArgs: {} },
  },
  isHexadecimal: {
    valid: { mandatoryArgs: { str: 'ff0044' }, optionalArgs: {} },
    inValid: { mandatoryArgs: { str: 'foo' }, optionalArgs: {} },
  },
  isIP: {
    valid: { mandatoryArgs: { str: '127.0.0.1' }, optionalArgs: { version: '' } },
    inValid: { mandatoryArgs: { str: 'www.google.com' }, optionalArgs: { version: '' } },
  },
  isISBN: {
    valid: { mandatoryArgs: { str: '978-3-16-148410-0' }, optionalArgs: { version: '' } },
    inValid: { mandatoryArgs: { str: '123456' }, optionalArgs: { version: '' } },
  },
  // isISIN: {
  //   valid: { mandatoryArgs: { str: '6166' }, optionalArgs: {} },
  //   inValid: { mandatoryArgs: { str: '12345' }, optionalArgs: {} },
  // },
  isISO31661Alpha2: {
    valid: { mandatoryArgs: { str: 'US' }, optionalArgs: {} },
    inValid: { mandatoryArgs: { str: 'zzz' }, optionalArgs: {} },
  },
  isISO8601: {
    valid: { mandatoryArgs: { str: '2018-03-28' }, optionalArgs: {} },
    inValid: { mandatoryArgs: { str: '2018-' }, optionalArgs: {} },
  },
  isISRC: {
    valid: { mandatoryArgs: { str: 'USS1Z9900001' }, optionalArgs: {} },
    inValid: { mandatoryArgs: { str: '999100' }, optionalArgs: {} },
  },
  isISSN: {
    valid: { mandatoryArgs: { str: '20905076' }, optionalArgs: { options: '' } },
    inValid: { mandatoryArgs: { str: '12345' }, optionalArgs: { options: '' } },
  },
  // isIn: {
  //   valid: { mandatoryArgs: { str: 'foo', values: 'foobar' }, optionalArgs: {} },
  //   inValid: { mandatoryArgs: { str: 'foo', values: 'bar' }, optionalArgs: {} },
  // },
  isInt: {
    valid: { mandatoryArgs: { str: '1234' }, optionalArgs: { options: '' } },
    inValid: { mandatoryArgs: { str: '123.123' }, optionalArgs: { options: '' } },
  },
  isJSON: {
    valid: { mandatoryArgs: { str: '{"key": "value"}' }, optionalArgs: {} },
    inValid: { mandatoryArgs: { str: '{key: "value"}' }, optionalArgs: {} },
  },
  isLatLong: {
    valid: { mandatoryArgs: { str: '40.712775, -74.005973' }, optionalArgs: {} },
    inValid: { mandatoryArgs: { str: '299, 399' }, optionalArgs: {} },
  },
  // isLength: {
  //   valid: { mandatoryArgs: { str: 'abcd' }, optionalArgs: { options: '' } },
  //   inValid: { mandatoryArgs: { str: '' }, optionalArgs: { options: '' } },
  // },
  // isLowercase: {
  //   valid: { mandatoryArgs: { str: 'foobar' }, optionalArgs: {} },
  //   inValid: { mandatoryArgs: { str: 'FOOBAR' }, optionalArgs: {} },
  // },
  isMACAddress: {
    valid: { mandatoryArgs: { str: '4C:9F:0A:7B:30:25' }, optionalArgs: {} },
    inValid: { mandatoryArgs: { str: '12345' }, optionalArgs: {} },
  },
  isMD5: {
    valid: { mandatoryArgs: { str: '327b6f07435811239bc47e1544353273' }, optionalArgs: {} },
    inValid: { mandatoryArgs: { str: 'foo bar' }, optionalArgs: {} },
  },
  isMimeType: {
    valid: { mandatoryArgs: { str: 'text/css' }, optionalArgs: {} },
    inValid: { mandatoryArgs: { str: 'text\\css' }, optionalArgs: {} },
  },
  // isMobilePhone: {
  //   valid: { mandatoryArgs: { str: '', locale: 'en-US' }, optionalArgs: { options: '' } },
  //   inValid: { mandatoryArgs: { str: '1234', locale: 'en-US' }, optionalArgs: { options: '' } },
  // },
  isMongoId: {
    valid: { mandatoryArgs: { str: '507f1f77bcf86cd799439011' }, optionalArgs: {} },
    inValid: { mandatoryArgs: { str: '507f1f77bcf86cd79fda9439011' }, optionalArgs: {} },
  },
  isMultibyte: {
    valid: { mandatoryArgs: { str: 'foo＠bar.com' }, optionalArgs: {} },
    inValid: { mandatoryArgs: { str: 'foobar' }, optionalArgs: {} },
  },
  isNumeric: {
    valid: { mandatoryArgs: { str: '1234' }, optionalArgs: {} },
    inValid: { mandatoryArgs: { str: 'a123e' }, optionalArgs: {} },
  },
  isPort: {
    valid: { mandatoryArgs: { str: '8888' }, optionalArgs: {} },
    inValid: { mandatoryArgs: { str: '262u2y1' }, optionalArgs: {} },
  },
  // isPostalCode: {
  //   valid: { mandatoryArgs: { str: '90001', locale: 'US' }, optionalArgs: {} },
  //   inValid: { mandatoryArgs: { str: '44sw33', locale: 'US' }, optionalArgs: {} },
  // },
  isSurrogatePair: {
    valid: { mandatoryArgs: { str: '𠮷野𠮷' }, optionalArgs: {} },
    inValid: { mandatoryArgs: { str: 'foo' }, optionalArgs: {} },
  },
  isURL: {
    valid: { mandatoryArgs: { str: 'www.foobar.com' }, optionalArgs: { options: '' } },
    inValid: { mandatoryArgs: { str: 'www-foobar' }, optionalArgs: { options: '' } },
  },
  isUUID: {
    valid: { mandatoryArgs: { str: 'd3bb98a2-0e77-4663-8c3d-8dfb99f5b773' }, optionalArgs: { version: '' } },
    inValid: { mandatoryArgs: { str: 'd3bb98a2-7-4663-8c3d-8dfb99f5b773' }, optionalArgs: { version: '' } },
  },
  // isUppercase: {
  //   valid: { mandatoryArgs: { str: 'FOOBAR' }, optionalArgs: {} },
  //   inValid: { mandatoryArgs: { str: 'foobar' }, optionalArgs: {} },
  // },
  isVariableWidth: {
    valid: { mandatoryArgs: { str: 'ｆｏｏ bar' }, optionalArgs: {} },
    inValid: { mandatoryArgs: { str: 'ｆｏｏ' }, optionalArgs: {} },
  },
  // isWhitelisted: {
  //   valid: { mandatoryArgs: { str: 'Iouea', chars: 'aeiou' }, optionalArgs: {} },
  //   inValid: { mandatoryArgs: { str: 'foobar', chars: 'xyz' }, optionalArgs: {} },
  // },
  // matches: {
  //   valid: { mandatoryArgs: { str: '', pattern: '' }, optionalArgs: { modifiers: '' } },
  //   inValid: { mandatoryArgs: { str: '', pattern: '' }, optionalArgs: { modifiers: '' } },
  // },
};
