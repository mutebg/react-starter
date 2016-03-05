import React from 'react';
import { shallow } from 'enzyme';
import List from './list';
import ListItem from '../listitem/listitem';


const mockData = [
  { name: 'Test Item 1' },
  { name: 'Test Item 2' },
];


describe('List Component', () => {
  it('render todoItems', () => {
    const wrapper = shallow(<List items={mockData} />);
    expect(wrapper.find(ListItem).lenght).toBe(mockData.length);
  });
});
