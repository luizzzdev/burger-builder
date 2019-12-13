import Layout from '../Layout';
import React from 'react';
import { shallow } from 'enzyme';
import { SideDrawer } from '../../../components/Navigation/SideDrawer/SideDrawer';
import { Toolbar } from '../../../components/Navigation/Toolbar/Toolbar';

describe('Layout', () => {
  let wrapper;

  it('render the children component', () => {
    const children = <p>hello</p>;
    wrapper = shallow(<Layout>{children}</Layout>);
    expect(wrapper.find('.Content').text()).toEqual('hello');
  });

  it('should update state when SideDrawer gets closed', () => {
    wrapper = shallow(<Layout />);
    wrapper.find(SideDrawer).prop('closed')();
    expect(wrapper.find(SideDrawer).prop('show')).toBe(false);
    wrapper.find(Toolbar).prop('openMenu')();
    expect(wrapper.find(SideDrawer).prop('show')).toBe(true);
  });
});
