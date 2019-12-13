import { DrawerToggle } from '../DrawerToggle';
import React from 'react';
import { shallow } from 'enzyme';
import { click } from '../../../../../helpers/testHelpers';

describe('DrawerToggle', () => {
  let wrapper;

  it('should call click when gets clicked', () => {
    const cb = jest.fn();
    wrapper = shallow(<DrawerToggle click={cb} />);
    click(wrapper);
    expect(cb).toHaveBeenCalled();
    expect(cb.mock.calls.length).toBe(1);
  });
});
