import React from 'react';
import { shallow } from 'enzyme';
import WineItem from '../';

describe('WineItem', () => {
  it('renders correctly', () => {
    const component = shallow(
      <WineItem />
    );

    expect(component).toMatchSnapshot();
  });
});
