export const supportedInputTypes = [
  'email', 'password', 'text',
  'color', 'date', 'datetime-local', 'month', 'number', 'range', 'hidden', 'search', 'tel', 'url', 'week',
];

export const validatorDefinition = {
  contains: {
    mandatoryParams: ['str', 'seed'],
    optionalParams: [],
  },
  equals: {
    mandatoryParams: ['str', 'comparison'],
    optionalParams: [],
  },
  isAfter: {
    mandatoryParams: ['str'],
    optionalParams: ['date'],
  },
  isAlpha: {
    mandatoryParams: ['str'],
    optionalParams: ['locale'],
  },
  isAlphanumeric: {
    mandatoryParams: ['str'],
    optionalParams: ['locale'],
  },
  isAscii: {
    mandatoryParams: ['str'],
    optionalParams: [],
  },
  isBase64: {
    mandatoryParams: ['str'],
    optionalParams: [],
  },
  isBefore: {
    mandatoryParams: ['str'],
    optionalParams: ['date'],
  },
  isBoolean: {
    mandatoryParams: ['str'],
    optionalParams: [],
  },
  isByteLength: {
    mandatoryParams: ['str'],
    optionalParams: ['options'],
  },
  isCreditCard: {
    mandatoryParams: ['str'],
    optionalParams: [],
  },
  isCurrency: {
    mandatoryParams: ['str'],
    optionalParams: ['options'],
  },
  isDataURI: {
    mandatoryParams: ['str'],
    optionalParams: [],
  },
  isDecimal: {
    mandatoryParams: ['str'],
    optionalParams: ['options'],
  },
  isDivisibleBy: {
    mandatoryParams: ['str', 'number'],
    optionalParams: [],
  },
  isEmail: {
    mandatoryParams: ['str'],
    optionalParams: ['options'],
  },
  isEmpty: {
    mandatoryParams: ['str'],
    optionalParams: [],
  },
  isFQDN: {
    mandatoryParams: ['str'],
    optionalParams: ['options'],
  },
  isFloat: {
    mandatoryParams: ['str'],
    optionalParams: ['options'],
  },
  isFullWidth: {
    mandatoryParams: ['str'],
    optionalParams: [],
  },
  isHalfWidth: {
    mandatoryParams: ['str'],
    optionalParams: [],
  },
  isHash: {
    mandatoryParams: ['str', 'algorithm'],
    optionalParams: [],
  },
  isHexColor: {
    mandatoryParams: ['str'],
    optionalParams: [],
  },
  isHexadecimal: {
    mandatoryParams: ['str'],
    optionalParams: [],
  },
  isIP: {
    mandatoryParams: ['str'],
    optionalParams: ['version'],
  },
  isISBN: {
    mandatoryParams: ['str'],
    optionalParams: ['version'],
  },
  isISIN: {
    mandatoryParams: ['str'],
    optionalParams: [],
  },
  isISO31661Alpha2: {
    mandatoryParams: ['str'],
    optionalParams: [],
  },
  isISO8601: {
    mandatoryParams: ['str'],
    optionalParams: [],
  },
  isISRC: {
    mandatoryParams: ['str'],
    optionalParams: [],
  },
  isISSN: {
    mandatoryParams: ['str'],
    optionalParams: ['options'],
  },
  isIn: {
    mandatoryParams: ['str', 'values'],
    optionalParams: [],
  },
  isInt: {
    mandatoryParams: ['str'],
    optionalParams: ['options'],
  },
  isJSON: {
    mandatoryParams: ['str'],
    optionalParams: [],
  },
  isLatLong: {
    mandatoryParams: ['str'],
    optionalParams: [],
  },
  isLength: {
    mandatoryParams: ['str'],
    optionalParams: ['options'],
  },
  isLowercase: {
    mandatoryParams: ['str'],
    optionalParams: [],
  },
  isMACAddress: {
    mandatoryParams: ['str'],
    optionalParams: [],
  },
  isMD5: {
    mandatoryParams: ['str'],
    optionalParams: [],
  },
  isMimeType: {
    mandatoryParams: ['str'],
    optionalParams: [],
  },
  isMobilePhone: {
    mandatoryParams: ['str, locale'],
    optionalParams: ['options'],
  },
  isMongoId: {
    mandatoryParams: ['str'],
    optionalParams: [],
  },
  isMultibyte: {
    mandatoryParams: ['str'],
    optionalParams: [],
  },
  isNumeric: {
    mandatoryParams: ['str'],
    optionalParams: [],
  },
  isPort: {
    mandatoryParams: ['str'],
    optionalParams: [],
  },
  isPostalCode: {
    mandatoryParams: ['str', 'locale'],
    optionalParams: [],
  },
  isSurrogatePair: {
    mandatoryParams: ['str'],
    optionalParams: [],
  },
  isURL: {
    mandatoryParams: ['str'],
    optionalParams: ['options'],
  },
  isUUID: {
    mandatoryParams: ['str'],
    optionalParams: ['version'],
  },
  isUppercase: {
    mandatoryParams: ['str'],
    optionalParams: [],
  },
  isVariableWidth: {
    mandatoryParams: ['str'],
    optionalParams: [],
  },
  isWhitelisted: {
    mandatoryParams: ['str', 'chars'],
    optionalParams: [],
  },
  matches: {
    mandatoryParams: ['str, pattern'],
    optionalParams: ['modifiers'],
  },
};
