import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Chance from 'chance';
import Input from '../Input';
import { validatorTestArgs } from '../constants';

configure({ adapter: new Adapter() });
const chance = new Chance();

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
      test('for valid input', () => {
        const { mandatoryArgs } = validatorTestArgs[validator].valid;
        Object.keys(mandatoryArgs).map((mandatoryArg) => {
          if (mandatoryArg !== 'str') {
            wrapper.setProps({ [mandatoryArg]: mandatoryArgs[mandatoryArg] });
          }
          return null;
        });

        input.simulate('change', { target: { value: mandatoryArgs.str } });
        expect(wrapper.state('inputValue')).toEqual(mandatoryArgs.str);
        input.simulate('blur');
        expect(wrapper.find('Glyphicon').exists()).toBeTruthy();
        expect(wrapper.find('Glyphicon').prop('glyph')).toEqual('ok');
        expect(wrapper.find('ErrorMessage').exists()).toBeFalsy();
      });

      test('for inValid input', () => {
        const { mandatoryArgs } = validatorTestArgs[validator].inValid;
        Object.keys(mandatoryArgs).map((mandatoryArg) => {
          if (mandatoryArg !== 'str') {
            wrapper.setProps({ [mandatoryArg]: mandatoryArgs[mandatoryArg] });
          }
          return null;
        });

        input.simulate('change', { target: { value: mandatoryArgs.str } });
        expect(wrapper.state('inputValue')).toEqual(mandatoryArgs.str);
        input.simulate('blur');
        expect(wrapper.find('Glyphicon').exists()).toBeTruthy();
        expect(wrapper.find('Glyphicon').prop('glyph')).toEqual('remove');
        expect(wrapper.find('ErrorMessage').exists()).toBeTruthy();
      });
    });

    describe("should display error message if 'required' input value is empty with", () => {
      test("default 'required' error message", () => {
        wrapper.setProps({ required: true });
        input.simulate('blur');
        expect(wrapper.find('span.help-block').text()).toEqual("You can't leave this blank");
        expect(wrapper.find('Glyphicon').exists()).toBeTruthy();
        expect(wrapper.find('Glyphicon').prop('glyph')).toEqual('remove');
      });

      test("custom 'required' error message when 'requiredErrMsg' prop is passed", () => {
        wrapper.setProps({ required: true });
        const requiredErrMsg = chance.sentence();
        wrapper.setProps({ requiredErrMsg });
        input.simulate('blur');
        expect(wrapper.find('span.help-block').text()).toEqual(requiredErrMsg);
        expect(wrapper.find('Glyphicon').exists()).toBeTruthy();
        expect(wrapper.find('Glyphicon').prop('glyph')).toEqual('remove');
      });
    });

    describe("if 'length' prop is passed", () => {
      describe("should display error messages if length is not equal to passed 'length' prop with", () => {
        test("default error message if 'lengthErrMsg' prop is undefined", () => {
          wrapper.setProps({ length: 8 });
          input.simulate('change', { target: { value: 'abcd' } });
          expect(wrapper.state('inputValue')).toEqual('abcd');
          input.simulate('blur');
          expect(wrapper.find('span.help-block').text()).toEqual('This should be 8 characters');
          expect(wrapper.find('Glyphicon').exists()).toBeTruthy();
          expect(wrapper.find('Glyphicon').prop('glyph')).toEqual('remove');
        });

        test("custom error message if 'lengthErrMsg' prop is passed", () => {
          wrapper.setProps({ length: 8 });
          input.simulate('change', { target: { value: 'abcd' } });
          expect(wrapper.state('inputValue')).toEqual('abcd');
          const lengthErrMsg = chance.sentence();
          wrapper.setProps({ lengthErrMsg });
          input.simulate('blur');
          expect(wrapper.find('span.help-block').text()).toEqual(lengthErrMsg);
          expect(wrapper.find('Glyphicon').exists()).toBeTruthy();
          expect(wrapper.find('Glyphicon').prop('glyph')).toEqual('remove');
        });
      });
    });

    describe("if 'minLength' prop is passed", () => {
      describe("should display error messages if minLength is not equal to passed 'minLength' prop with", () => {
        test("default error message if 'minLengthErrMsg' prop is undefined", () => {
          wrapper.setProps({ minLength: 4 });
          input.simulate('change', { target: { value: 'abc' } });
          expect(wrapper.state('inputValue')).toEqual('abc');
          input.simulate('blur');
          expect(wrapper.find('span.help-block').text()).toEqual('Enter atleast 4 characters');
          expect(wrapper.find('Glyphicon').exists()).toBeTruthy();
          expect(wrapper.find('Glyphicon').prop('glyph')).toEqual('remove');
        });

        test("custom error message if 'minLengthErrMsg' prop is passed", () => {
          wrapper.setProps({ minLength: 4 });
          input.simulate('change', { target: { value: 'abc' } });
          expect(wrapper.state('inputValue')).toEqual('abc');
          const minLengthErrMsg = chance.sentence();
          wrapper.setProps({ minLengthErrMsg });
          input.simulate('blur');
          expect(wrapper.find('span.help-block').text()).toEqual(minLengthErrMsg);
          expect(wrapper.find('Glyphicon').exists()).toBeTruthy();
          expect(wrapper.find('Glyphicon').prop('glyph')).toEqual('remove');
        });
      });
    });

    describe("if 'maxLength' prop is passed", () => {
      describe("should display error messages if maxLength is not equal to passed 'maxLength' prop with", () => {
        test("default error message if 'maxLengthErrMsg' prop is undefined", () => {
          wrapper.setProps({ maxLength: 6 });
          input.simulate('change', { target: { value: 'abcdefg' } });
          expect(wrapper.state('inputValue')).toEqual('abcdefg');
          input.simulate('blur');
          expect(wrapper.find('span.help-block').text()).toEqual('Must have atmost 6 characters');
          expect(wrapper.find('Glyphicon').exists()).toBeTruthy();
          expect(wrapper.find('Glyphicon').prop('glyph')).toEqual('remove');
        });

        test("custom error message if 'maxLengthErrMsg' prop is passed", () => {
          wrapper.setProps({ maxLength: 6 });
          input.simulate('change', { target: { value: 'abcdefg' } });
          expect(wrapper.state('inputValue')).toEqual('abcdefg');
          const maxLengthErrMsg = chance.sentence();
          wrapper.setProps({ maxLengthErrMsg });
          input.simulate('blur');
          expect(wrapper.find('span.help-block').text()).toEqual(maxLengthErrMsg);
          expect(wrapper.find('Glyphicon').exists()).toBeTruthy();
          expect(wrapper.find('Glyphicon').prop('glyph')).toEqual('remove');
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
