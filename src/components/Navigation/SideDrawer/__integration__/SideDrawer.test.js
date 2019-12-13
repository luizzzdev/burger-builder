import { SideDrawer } from '../SideDrawer';
import React from 'react';
import { shallow } from 'enzyme';
import { Backdrop } from '../../../UI/Backdrop/Backdrop';

describe('SideDrawer', () => {
  let wrapper;

  it('should call closed when backdrop gets clicked', () => {
    const cb = jest.fn();
    wrapper = shallow(<SideDrawer show={true} closed={cb} />);
    wrapper.find(Backdrop).prop('clicked')();
    expect(cb).toHaveBeenCalled();
    expect(cb.mock.calls.length).toBe(1);
  });
});
