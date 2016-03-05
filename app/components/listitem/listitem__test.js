import React from 'react';
import { shallow } from 'enzyme';
import ListItem from './listitem';
import sinon from 'sinon';

const mockData = {
  name: 'Test Item',
  onRemove: () => 2,
};

describe('ListItem Component', () => {
  it('render name', () => {
    const wrapper = shallow(<ListItem {...mockData} />);
    expect(wrapper.find('span').text()).toEqual(mockData.name);
  });

  it('click remove', () => {
    const spy = sinon.spy();
    const wrapper = shallow(<ListItem onRemove={spy} />);
    wrapper.find('button').simulate('click');
    expect(spy.calledOnce).toBe(true);
  });

});
