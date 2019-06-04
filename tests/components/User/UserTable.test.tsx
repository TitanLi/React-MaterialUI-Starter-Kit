import React from 'react';
import { mount } from 'enzyme';
import UserTable from '../../../src/components/User/UserTable';

const render = ({
  data,
  onEditClick,
  onAddClick,
  onDeleteClick,
  columns,
  defaultPageSize
} = {}) => {
  const item = mount(
    <UserTable
      data={data}
      onEditClick={onEditClick}
      onAddClick={onAddClick}
      onDeleteClick={onDeleteClick}
      columns={columns}
      defaultPageSize={defaultPageSize}
    />
  );

  if (item.mount) item.mount();
  return item;
};
describe('Testing UserTable', () => {
  test('render component', () => {
    const item = render();
    expect(item).toMatchSnapshot();
  });
  test('on click add', () => {
    const onAddClick = jest.fn();
    const wrapper = render({ onAddClick: onAddClick });
    const btn = wrapper.find('button[aria-label="Add"]');
    expect(wrapper).toMatchSnapshot();
    btn.simulate('click');
    expect(onAddClick).toBeCalled();
  });
  test('on click edit', () => {
    const onEditClick = jest.fn();
    const data = [{ name: 'tuan' }];
    const columns = [
      {
        Header: 'Name',
        accessor: 'name'
      }
    ];
    const wrapper = render({
      onEditClick: onEditClick,
      data: data,
      columns: columns
    });
    const btn = wrapper.find('button[title="Edit"]');
    expect(wrapper).toMatchSnapshot();
    btn.simulate('click');
    expect(onEditClick).toBeCalled();
  });
  test('on click delete', () => {
    const onDeleteClick = jest.fn();
    const data = [{ name: 'tuan' }];
    const columns = [
      {
        Header: 'Name',
        accessor: 'name'
      }
    ];
    const wrapper = render({
      onDeleteClick: onDeleteClick,
      data: data,
      columns: columns
    });
    const btn = wrapper.find('button[title="Delete"]');
    expect(wrapper).toMatchSnapshot();
    btn.simulate('click');
    expect(onDeleteClick).toBeCalled();
  });
});
