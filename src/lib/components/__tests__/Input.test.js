import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Chance from 'chance';
import Field from '../Field';
import { itShouldDisplayError, itShouldDisplaySuccess } from './testUtil';
import { validatorTestArgs, errorMessages } from '../constants';

configure({ adapter: new Adapter() });
const chance = new Chance();

describe('reactjs-input-validator', () => {
  describe('if required prop alone is sent without validator prop, input', () => {
    test('should display error msg if it is empty', () => {
      const inputProps = {
        required: true,
        name: 'requiredValidation',
      };
      itShouldDisplayError(inputProps, "You can't leave this empty");
    });

    test('should not display empty error msg if input value is entered', () => {
      const inputProps = {
        required: true,
        name: 'requiredValidation',
        value: { value: chance.word() },
      };
      itShouldDisplaySuccess(inputProps);
    });
  });

  describe('if length prop alone is sent without validator prop, input', () => {
    test('should display error msg if input value length doen\'t match', () => {
      const inputProps = {
        length: 6,
        name: 'lengthValidation',
        value: { value: chance.word({ length: 3 }) },
      };
      itShouldDisplayError(inputProps, 'This should be 6 characters');
    });

    test('should not display empty error msg if input value length matches', () => {
      const inputProps = {
        length: 6,
        name: 'lengthValidation',
        value: { value: chance.word({ length: 6 }) },
      };
      itShouldDisplaySuccess(inputProps);
    });
  });

  Object.keys(validatorTestArgs).map((validator) => {
    describe(`for validator --${validator}--`, () => {
      const wrapper = mount(<Field validator={validator} name={validator} />);

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
          wrapper.setProps({ value: { value: inputValue } });
          itShouldDisplaySuccess(
            {}, // inputProps
            wrapper,
          );
        });

        test('for inValid input', () => {
          const errorMessage = errorMessages[validator] || 'Enter valid input';
          const inputValue = validatorTestArgs[validator].inValid.mandatoryArgs.str;
          wrapper.setProps({ value: { value: inputValue } });
          passArgumentsAsProps('inValid');
          itShouldDisplayError(
            {}, // inputProps
            errorMessage,
            wrapper,
          );
        });
      });

      describe("should display error message if 'required' input value is empty with", () => {
        test("default 'required' error message", () => {
          wrapper.setProps({ required: true });
          wrapper.setProps({ value: { value: '' } });
          itShouldDisplayError(
            {}, // inputProps
            "You can't leave this empty",
            wrapper,
          );
        });

        test("custom 'required' error message when 'requiredErrMsg' prop is passed", () => {
          wrapper.setProps({ required: true });
          const requiredErrMsg = chance.sentence();
          wrapper.setProps({ requiredErrMsg });
          wrapper.setProps({ value: { value: '' } });
          itShouldDisplayError(
            {}, // inputProps
            requiredErrMsg,
            wrapper,
          );
        });
      });

      describe("if 'length' prop is passed", () => {
        describe("should display error messages if length is not equal to passed 'length' prop with", () => {
          test("default error message if 'lengthErrMsg' prop is undefined", () => {
            wrapper.setProps({ length: 8 });
            wrapper.setProps({ value: { value: chance.word({ length: 3 }) } });
            itShouldDisplayError(
              {}, // inputProps
              'This should be 8 characters',
              wrapper,
            );
          });

          test("custom error message if 'lengthErrMsg' prop is passed", () => {
            wrapper.setProps({ length: 8 });
            wrapper.setProps({ value: { value: chance.word({ length: 3 }) } });
            const lengthErrMsg = chance.sentence();
            wrapper.setProps({ lengthErrMsg });
            itShouldDisplayError(
              {}, // inputProps
              lengthErrMsg,
              wrapper,
            );
          });
        });
      });

      describe("if 'minLength' prop is passed", () => {
        describe("should display error messages if minLength is not equal to passed 'minLength' prop with", () => {
          test("default error message if 'minLengthErrMsg' prop is undefined", () => {
            wrapper.setProps({ minLength: 4 });
            wrapper.setProps({ value: { value: chance.word({ length: 3 }) } });
            itShouldDisplayError(
              {}, // inputProps
              'Enter atleast 4 characters',
              wrapper,
            );
          });

          test("custom error message if 'minLengthErrMsg' prop is passed", () => {
            wrapper.setProps({ minLength: 4 });
            wrapper.setProps({ value: { value: chance.word({ length: 3 }) } });
            const minLengthErrMsg = chance.sentence();
            wrapper.setProps({ minLengthErrMsg });
            itShouldDisplayError(
              {}, // inputProps
              minLengthErrMsg,
              wrapper,
            );
          });
        });
      });

      describe("if 'maxLength' prop is passed", () => {
        describe("should display error messages if maxLength is not equal to passed 'maxLength' prop with", () => {
          test("default error message if 'maxLengthErrMsg' prop is undefined", () => {
            wrapper.setProps({ maxLength: 6 });
            wrapper.setProps({ value: { value: chance.word({ length: 7 }) } });
            itShouldDisplayError(
              {}, // inputProps
              'Must have atmost 6 characters',
              wrapper,
            );
          });

          test("custom error message if 'maxLengthErrMsg' prop is passed", () => {
            wrapper.setProps({ maxLength: 6 });
            wrapper.setProps({ value: { value: chance.word({ length: 7 }) } });
            const maxLengthErrMsg = chance.sentence();
            wrapper.setProps({ maxLengthErrMsg });
            itShouldDisplayError(
              {}, // inputProps
              maxLengthErrMsg,
              wrapper,
            );
          });
        });
      });

      test("shouldn't display any error message if user focuses on Input box at any time", () => {
        const input = wrapper.find('input.form-control');
        input.simulate('focus');
        expect(wrapper.find('ErrorMessage').exists()).toBeFalsy();
        expect(wrapper.find('Glyphicon').exists()).toBeFalsy();
      });

      test("shouldn't display error message for a not required input even if user input value is empty", () => {
        const input = wrapper.find('input.form-control');
        wrapper.setProps({ required: false });
        wrapper.setProps({ value: { value: '' } });
        input.simulate('blur');
        expect(wrapper.find('ErrorMessage').exists()).toBeFalsy();
        expect(wrapper.find('Glyphicon').exists()).toBeFalsy();
      });
    });
    return null;
  });
});
