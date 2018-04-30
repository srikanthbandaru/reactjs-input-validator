/* eslint-disable function-paren-newline */
import React from 'react';
import { mount } from 'enzyme';
import Input from '../Input';

export function itShouldDisplayError(inputProps, errorMessage, validatorWrapper) {
  const plainWrapper = mount(
    <Input
      required={inputProps.required}
      name={inputProps.name}
      value={inputProps.value}
      length={inputProps.length}
    />,
  );
  const wrapper = validatorWrapper || plainWrapper;
  const input = wrapper.find('input.form-control');
  input.simulate('blur');
  expect(wrapper.find('Glyphicon').exists()).toBeTruthy();
  expect(wrapper.find('span.help-block').text()).toEqual(errorMessage);
  expect(wrapper.find('Glyphicon').prop('glyph')).toEqual('remove');
  expect(wrapper.find('ErrorMessage').exists()).toBeTruthy();
}

export function itShouldDisplaySuccess(inputProps, validatorWrapper) {
  const plainWrapper = mount(
    <Input
      required={inputProps.required}
      name={inputProps.name}
      value={inputProps.value}
      length={inputProps.length}
    />,
  );
  const wrapper = validatorWrapper || plainWrapper;
  const input = wrapper.find('input.form-control');

  input.simulate('blur');
  expect(wrapper.find('Glyphicon').exists()).toBeTruthy();
  expect(wrapper.find('Glyphicon').prop('glyph')).toEqual('ok');
  expect(wrapper.find('ErrorMessage').exists()).toBeFalsy();
}
