
# ReactJS Input Validator

<p align="center">
  <a href="https://travis-ci.org/srikanthbandaru/reactjs-input-validator"><img src="https://travis-ci.org/srikanthbandaru/reactjs-input-validator.svg?branch=master" alt="travis"></a>
  <a href="https://www.npmjs.com/package/reactjs-input-validator"><img src="https://badge.fury.io/js/reactjs-input-validator.svg" alt="npm version"></a>
  <a href="https://coveralls.io/github/srikanthbandaru/reactjs-input-validator?branch=master"><img src="https://coveralls.io/repos/github/srikanthbandaru/reactjs-input-validator/badge.svg?branch=master" alt="coveralls badge"></a>
</p>

## Input validator for [React][react-website] with the awesomeness of [validator.js][validatorjs-website]
This module saves you time in three ways.
- **Clean code.** Every form has unique requirements. You don't have to write custom validations for every input field in your form.  
- **No new syntax.** You don't have to deal with any weird syntax. Pass the validator that you want for your input field as a prop and... that's it!
- **Inbuilt styles & error messages.** We even ship you the custom styles and error messages for the validation of your input fields.

## Usage
### Install
```
yarn add reactjs-input-validator
```
```
npm install reactjs-input-validator --save
```
### Import Library
To use reactjs-input-validator in your react app, you should import it first.

```js
// ES6
import {Input} from 'reactjs-inpupt-validator';
// or in ES5
var Input = require('reactjs-input-validator');
```
### Import CSS
Finally, you need to link bootstrap to your application.
```html
// index.html
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
```
### Props
| Name      | Type   | Default      | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --------- | ------ | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| validator | string |              | One of the validators from [validator.js][validatorjs-website] <br /> `["contains", "equals", "isAfter", "isAlpha", "isAlphanumeric", "isAscii", "isBase64", "isBefore", "isBoolean", "isByteLength", "isCreditCard", "isCurrency", "isDataURI", "isDecimal", "isDivisibleBy", "isEmail", "isEmpty", "isFQDN", "isFloat", "isFullWidth", "isHalfWidth", "isHash", "isHexColor", "isHexadecimal", "isIP", "isISBN", "isISIN", "isISO31661Alpha2", "isISO8601", "isISRC", "isISSN", "isIn", "isInt", "isJSON", "isLatLong", "isLength", "isLowercase", "isMACAddress", "isMD5", "isMimeType", "isMobilePhone", "isMongoId", "isMultibyte", "isNumeric", "isPort", "isPostalCode", "isSurrogatePair", "isURL", "isUUID", "isUppercase", "isVariableWidth", "isWhitelisted", "matches"]` |
| name      | string |              | The name attribute is used to reference input elements and to reference it's data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| type      | string | text         | The type attribute specifies the type of  element to display. <br/> **Supported types:** `[email, password, text, color, date, datetime-local, month, number, range, hidden, search, tel, url, week]` <br/> **Not supported types:** `[button, checkbox, file, image, radio, reset, submit, time]`                                                                                                                                                                                                                                                                                                     |
| className | string | form-control | Base CSS class for the component. Generally one should only change className to provide new, non-Bootstrap, CSS styles for a component.                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| required | boolean | false | Use this prop to make the inpupt field required.                                                                                                                                                                                                                                                                                                                                                                                                                                            |
### Usage/Demo
```js
import React, { Component } from 'react'
import { Input, formInputData, formValidation } from 'reactjs-input-validator';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value, name, validationState, isRequired) {
    const { data } = this.state;
    data[name] = { value, validation: validationState, isRequired };
    this.setState({
      data,
    });

    // if you want access to your form data
    const formData = formInputData(this.state.data); // eslint-disable-line no-unused-vars
    // tells you if the entire form validation is true or false
    const isFormValid = formValidation(this.state.data); // eslint-disable-line no-unused-vars
  }

  render() {
    const emailOptions = { require_display_name: true };
    return (
      <form>
        <Input
          validator="isEmail"
          options={emailOptions}
          name="userEmail"
          placeholder="Enter email"
          label="Email address"
          onChange={this.handleChange}
          required
        />
        <Input
          validator="isAlphanumeric"
          name="userPassword"
          onChange={this.handleChange}
          type="password"
        />
        <button
          type="submit"
          className="btn btn-primary"
          disabled={!formValidation(this.state.data)}
        >
          Sign in
        </button>
      </form>
    );
  }
}

```
## License

[MIT](LICENSE). Copyright (c) Srikanth Bandaru.

[react-website]: https://reactjs.org
[validatorjs-website]: https://github.com/chriso/validator.js
