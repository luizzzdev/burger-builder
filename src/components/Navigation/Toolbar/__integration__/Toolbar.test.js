import React from 'react';
import { shallow } from 'enzyme';
import { Toolbar } from '../Toolbar';
import { DrawerToggle } from '../../SideDrawer/DrawerToggle/DrawerToggle';

describe('Toolbar', () => {
  let wrapper;

  it('should call click when DrawerToggle clicked', () => {
    const cb = jest.fn();
    wrapper = shallow(<Toolbar openMenu={cb} />);
    wrapper.find(DrawerToggle).prop('click')();
    expect(cb).toHaveBeenCalled();
    expect(cb.mock.calls.length).toBe(1);
  });
});
