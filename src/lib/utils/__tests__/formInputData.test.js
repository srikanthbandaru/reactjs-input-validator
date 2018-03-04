import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import formInputData from '../formInputData';

configure({ adapter: new Adapter() });

const data = {
  userEmail: { value: 'foo@bar.com', validation: true, isRequired: true },
  userPassword: { value: 'foobar', validation: true, isRequired: false },
};

const formData = {
  userEmail: 'foo@bar.com',
  userPassword: 'foobar',
};

describe('formInputData()', () => {
  test('if given data, returns formData in required format', () => {
    expect(formInputData(data)).toEqual(formData);
  });
});
