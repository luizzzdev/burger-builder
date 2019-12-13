import React from 'react';
import { Modal } from '../Modal';
import { mount } from 'enzyme';
import { Backdrop } from '../../Backdrop/Backdrop';
import { click } from '../../../../helpers/testHelpers';

describe('Modal', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = null;
  });

  it('renders the children passed to it', () => {
    const children = <h1>hello</h1>;
    wrapper = mount(<Modal>{children}</Modal>);
    expect(wrapper.find('.Modal').text()).toEqual('hello');
  });

  it('should be visible when show is true', () => {
    wrapper = mount(<Modal show={true} />);
    expect(wrapper.find('.Modal').prop('style').opacity).toBe(1);
    expect(wrapper.find('.Modal').prop('style').transform).toBe(
      'translateY(0)'
    );
    wrapper = mount(<Modal show={false} />);
    expect(wrapper.find('.Modal').prop('style').opacity).toBe(0);
    expect(wrapper.find('.Modal').prop('style').transform).toBe(
      'translateY(-100vh)'
    );
  });

  it('call closed when backdrop is clicked', () => {
    const cb = jest.fn();
    wrapper = mount(<Modal closed={cb} show={true} />);
    click(wrapper.find(Backdrop));
    expect(cb).toHaveBeenCalled();
    expect(cb.mock.calls.length).toBe(1);
  });
});
