import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Chance from 'chance';
import Input from '../Input';
import { validatorTestArgs, errorMessages } from '../constants';

configure({ adapter: new Adapter() });
const chance = new Chance();

function itShouldDisplayError(wrapper, input, errorMessage, inputValue) {
  if (inputValue) {
    input.simulate('change', { target: { value: inputValue } });
    expect(wrapper.state('inputValue')).toEqual(inputValue);
  }
  input.simulate('blur');
  expect(wrapper.find('Glyphicon').exists()).toBeTruthy();
  expect(wrapper.find('span.help-block').text()).toEqual(errorMessage);
  expect(wrapper.find('Glyphicon').prop('glyph')).toEqual('remove');
  expect(wrapper.find('ErrorMessage').exists()).toBeTruthy();
}

function itShouldDisplaySuccess(wrapper, input, inputValue) {
  if (inputValue) {
    input.simulate('change', { target: { value: inputValue } });
    expect(wrapper.state('inputValue')).toEqual(inputValue);
  }
  input.simulate('blur');
  expect(wrapper.find('Glyphicon').exists()).toBeTruthy();
  expect(wrapper.find('Glyphicon').prop('glyph')).toEqual('ok');
  expect(wrapper.find('ErrorMessage').exists()).toBeFalsy();
}

describe('reactjs-input-validator if required prop alone is sent', () => {
  const wrapper = mount(<Input required name="requiredValidation" />);
  const input = wrapper.find('input.form-control');

  test('should display error msg if input is empty', () => {
    itShouldDisplayError(wrapper, input, "You can't leave this empty");
  });

  test('should not display empty error msg if input not empty', () => {
    itShouldDisplaySuccess(wrapper, input, 'test input');
  });
});

describe('reactjs-input-validator if length prop alone is sent', () => {
  const wrapper = mount(<Input length={6} name="lengthValidation" />);
  const input = wrapper.find('input.form-control');

  test('should display error msg if input characters length does not match', () => {
    itShouldDisplayError(wrapper, input, 'This should be 6 characters', 'abcdefg');
  });

  test('should not display empty error msg if input characters length matches', () => {
    itShouldDisplaySuccess(wrapper, input, 'abcdef');
  });
});

Object.keys(validatorTestArgs).map((validator) => {
  describe(`reactjs-input-validator for validator --${validator}--`, () => {
    const wrapper = mount(<Input validator={validator} name={validator} />);
    const input = wrapper.find('input.form-control');

    afterEach(() => {
      wrapper.setProps({ required: false });
      wrapper.setState({ inputValue: '' });
      wrapper.setProps({ length: null });
      wrapper.setProps({ lengthErrMsg: null });
      wrapper.setProps({ minLength: null });
      wrapper.setProps({ minLengthErrMsg: null });
    });

    describe('should validate the user input', () => {
      function passArgumentsAsProps(type) {
        const { mandatoryArgs } = validatorTestArgs[validator][type];
        const { optionalArgs } = validatorTestArgs[validator][type];
        Object.keys(mandatoryArgs).map((mandatoryArg) => {
          if (mandatoryArg !== 'str') {
            wrapper.setProps({ [mandatoryArg]: mandatoryArgs[mandatoryArg] });
          }
          return null;
        });
        Object.keys(optionalArgs).map((optionalArg) => {
          if (optionalArgs[optionalArg] !== '') {
            wrapper.setProps({ [optionalArg]: optionalArgs[optionalArg] });
          }
          return null;
        });
      }

      test('for valid input', () => {
        passArgumentsAsProps('valid');
        const inputValue = validatorTestArgs[validator].valid.mandatoryArgs.str;
        itShouldDisplaySuccess(
          wrapper, input,
          inputValue,
        );
      });

      test('for inValid input', () => {
        const errorMessage = errorMessages[validator] || 'Enter valid input';
        const inputValue = validatorTestArgs[validator].inValid.mandatoryArgs.str;
        passArgumentsAsProps('inValid');
        itShouldDisplayError(
          wrapper, input, errorMessage,
          inputValue,
        );
      });
    });

    describe("should display error message if 'required' input value is empty with", () => {
      test("default 'required' error message", () => {
        wrapper.setProps({ required: true });
        itShouldDisplayError(wrapper, input, "You can't leave this empty");
      });

      test("custom 'required' error message when 'requiredErrMsg' prop is passed", () => {
        wrapper.setProps({ required: true });
        const requiredErrMsg = chance.sentence();
        wrapper.setProps({ requiredErrMsg });
        itShouldDisplayError(wrapper, input, requiredErrMsg);
      });
    });

    describe("if 'length' prop is passed", () => {
      describe("should display error messages if length is not equal to passed 'length' prop with", () => {
        test("default error message if 'lengthErrMsg' prop is undefined", () => {
          wrapper.setProps({ length: 8 });
          input.simulate('change', { target: { value: 'abcd' } });
          expect(wrapper.state('inputValue')).toEqual('abcd');
          itShouldDisplayError(wrapper, input, 'This should be 8 characters');
        });

        test("custom error message if 'lengthErrMsg' prop is passed", () => {
          wrapper.setProps({ length: 8 });
          input.simulate('change', { target: { value: 'abcd' } });
          expect(wrapper.state('inputValue')).toEqual('abcd');
          const lengthErrMsg = chance.sentence();
          wrapper.setProps({ lengthErrMsg });
          itShouldDisplayError(wrapper, input, lengthErrMsg);
        });
      });
    });

    describe("if 'minLength' prop is passed", () => {
      describe("should display error messages if minLength is not equal to passed 'minLength' prop with", () => {
        test("default error message if 'minLengthErrMsg' prop is undefined", () => {
          wrapper.setProps({ minLength: 4 });
          input.simulate('change', { target: { value: 'abc' } });
          expect(wrapper.state('inputValue')).toEqual('abc');
          itShouldDisplayError(wrapper, input, 'Enter atleast 4 characters');
        });

        test("custom error message if 'minLengthErrMsg' prop is passed", () => {
          wrapper.setProps({ minLength: 4 });
          input.simulate('change', { target: { value: 'abc' } });
          expect(wrapper.state('inputValue')).toEqual('abc');
          const minLengthErrMsg = chance.sentence();
          wrapper.setProps({ minLengthErrMsg });
          itShouldDisplayError(wrapper, input, minLengthErrMsg);
        });
      });
    });

    describe("if 'maxLength' prop is passed", () => {
      describe("should display error messages if maxLength is not equal to passed 'maxLength' prop with", () => {
        test("default error message if 'maxLengthErrMsg' prop is undefined", () => {
          wrapper.setProps({ maxLength: 6 });
          input.simulate('change', { target: { value: 'abcdefg' } });
          expect(wrapper.state('inputValue')).toEqual('abcdefg');
          itShouldDisplayError(wrapper, input, 'Must have atmost 6 characters');
        });

        test("custom error message if 'maxLengthErrMsg' prop is passed", () => {
          wrapper.setProps({ maxLength: 6 });
          input.simulate('change', { target: { value: 'abcdefg' } });
          expect(wrapper.state('inputValue')).toEqual('abcdefg');
          const maxLengthErrMsg = chance.sentence();
          wrapper.setProps({ maxLengthErrMsg });
          itShouldDisplayError(wrapper, input, maxLengthErrMsg);
        });
      });
    });

    test("shouldn't display any error message if user focuses on Input box at any time", () => {
      input.simulate('focus');
      expect(wrapper.find('ErrorMessage').exists()).toBeFalsy();
      expect(wrapper.find('Glyphicon').exists()).toBeFalsy();
    });

    test("shouldn't display error message for a not required input even if user input value is empty", () => {
      wrapper.setProps({ required: false });
      input.simulate('blur');
      expect(wrapper.find('ErrorMessage').exists()).toBeFalsy();
      expect(wrapper.find('Glyphicon').exists()).toBeFalsy();
    });
  });
  return null;
});
