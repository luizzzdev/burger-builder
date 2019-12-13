import { SideDrawer } from '../SideDrawer';
import React from 'react';
import { shallow } from 'enzyme';

describe('SideDrawer', () => {
  let wrapper;

  it('should be Closed when show is false', () => {
    wrapper = shallow(<SideDrawer show={false} />);
    expect(wrapper.find('.SideDrawer').hasClass('Close')).toBe(true);
  });

  it('should be Open when show is true', () => {
    wrapper = shallow(<SideDrawer show={true} />);
    expect(wrapper.find('.SideDrawer').hasClass('Open')).toBe(true);
  });
});
