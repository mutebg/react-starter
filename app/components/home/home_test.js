import React from 'react';
import { shallow } from 'enzyme';
import Home from './home';

describe("Home Component", () => {

  it("contains class .home", () => {
      expect(shallow(<Home />).is('.home')).toBe(true);
  });

  it("simulate click and count", () => {
      const wrapper = shallow(<Home />);
      wrapper.find('button').simulate('click');
      expect( wrapper.text() ).toEqual('Counter: 1');
  });

});
