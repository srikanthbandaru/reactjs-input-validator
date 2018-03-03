import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Chance from 'chance';
import Input from '../Input';
import { validatorTestArgs } from '../constants';

configure({ adapter: new Adapter() });
const chance = new Chance();

Object.keys(validatorTestArgs).map((validator) => {
  describe('reactjs-input-validator', () => {
    const wrapper = mount(<Input validator={validator} name={validator} />);
    const input = wrapper.find('input.form-control');

    afterEach(() => {
      wrapper.setProps({ required: false });
      wrapper.setState({ inputValue: '' });
    });

    describe(`should validate if user input --${validator}--`, () => {
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
        expect(wrapper.find('ErrorMessage').exists()).toBeFalsy();
        expect(wrapper.find('Glyphicon').exists()).toBeTruthy();
        expect(wrapper.find('Glyphicon').prop('glyph')).toEqual('ok');
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
        expect(wrapper.find('ErrorMessage').exists()).toBeTruthy();
        expect(wrapper.find('Glyphicon').exists()).toBeTruthy();
        expect(wrapper.find('Glyphicon').prop('glyph')).toEqual('remove');
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
        const requiredErrMsg = chance.sentence();
        wrapper.setProps({ requiredErrMsg });
        input.simulate('blur');
        expect(wrapper.find('span.help-block').text()).toEqual(requiredErrMsg);
        expect(wrapper.find('Glyphicon').exists()).toBeTruthy();
        expect(wrapper.find('Glyphicon').prop('glyph')).toEqual('remove');
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
