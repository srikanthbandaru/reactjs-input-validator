
# ReactJS Input Validator
Input validator for [React][react-website] with the awesomeness of [validator.js][validatorjs-website]

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
Finally, you need to import the CSS file into your application.
```js
// index.js
import 'reactjs-input-validator/build/css/reactjs-input-validator.css'
```
### Props
| Name      | Type     | Default      | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|-----------|----------|--------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| className | string   | form-control | Base CSS class for the component. Generally one should only change className to provide new, non-Bootstrap, CSS styles for a component.                                                                                                                                                                                                                                                                                                                                                                                                                       |
| name      | string   |              | The name attribute is used to reference input elements and to reference it's data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| onChange  | function |              | The onChange event provides an object of input values with names of inputs as their keys. ex: ```{userEmail: "john.doe@example.com", userCreditCard: "4111111111111111"}```                                                                                                                                                                                                                                                                                                                                                                                                         |
| validator | string   |              | One of the validators from [validator.js][validatorjs-website] `["isAlpha", "isAlphanumeric", "isAscii", "isBase64", "isBoolean", "isCreditCard", "isCurrency", "isDataURI", "isDecimal", "isEmail", "isEmpty", "isFQDN", "isFloat", "isFullWidth", "isHalfWidth", "isHexColor", "isHexadecimal", "isISSN", "isISIN", "isISO8601", "isISO31661Alpha2", "isISRC", "isInt", "isJSON", "isLatLong", "isLowercase", "isMACAddress", "isMD5", "isMimeType", "isMongoId", "isMultibyte", "isNumeric", "isPort", "isSurrogatePair", "isURL", "isUUID", "isUppercase", "isVariableWidth"]` |

### Usage/Demo
```js
import React, { Component } from 'react'
import { Input } from 'reactjs-input-validator';

export default class App extends Component {
  constructor (){
      super();
      this.state = {
          formData : {}
      };

      this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value, name) {
    const formData = this.state.formData;
    formData[name] = value

    this.setState({
      formData: formData
    })

    // You can now find your form data by doing
    console.log(this.state.formData);
  }

  render() {
    return (
      <div>
        <Input validator="isEmail" name="userEmail" onChange={this.handleChange} />
        <Input validator="isCreditCard" name="userCreditCard" onChange={this.handleChange} />
      </div>
    )
  }
}

```
## License

[MIT](LICENSE). Copyright (c) Srikanth Bandaru.

[react-website]: https://reactjs.org
[validatorjs-website]: https://github.com/chriso/validator.js
