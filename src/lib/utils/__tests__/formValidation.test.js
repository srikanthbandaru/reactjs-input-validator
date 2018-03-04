import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import formValidation from '../formValidation';

configure({ adapter: new Adapter() });

const data = {
  userEmail: { value: 'foo@bar.com', validation: true, isRequired: true },
  userPassword: { value: 'foobar', validation: true, isRequired: false },
};

const formValidationResult = true;

describe('formValidation()', () => {
  test('if given data, returns boolean with form validation status', () => {
    expect(formValidation(data)).toEqual(formValidationResult);
  });
});
