import React from 'react';
import { mount } from 'enzyme';
import UserForm from '../../../src/components/User/UserForm';

const render = ({ user, onClose, onSave } = {}) => {
  const item = mount(
    <UserForm user={user} onClose={onClose} onSave={onSave} />
  );

  if (item.mount) item.mount();
  return item;
};
describe('Testing UserForm', () => {
  const user = {
    id: 0,
    username: '',
    email: '',
    firstName: '',
    lastName: '',
    avatar: null
  };
  test('render component', () => {
    const item = render({ user: user });
    expect(item).toMatchSnapshot();
  });
  test('on click save', () => {
    const onSaveClick = jest.fn();
    const wrapper = render({ onSave: onSaveClick, user: user });
    const btn = wrapper.find('button[type="submit"]');
    btn.simulate('submit');
    expect(onSaveClick).toBeCalled();
  });
  test('on click close', () => {
    const onCloseClick = jest.fn();
    const wrapper = render({ onClose: onCloseClick, user: user });
    const btn = wrapper.find('button[type="button"]');
    btn.simulate('click');
    expect(onCloseClick).toBeCalled();
  });
});
