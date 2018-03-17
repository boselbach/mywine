import React from 'react';
import { shallow } from 'enzyme';
import WineList from '../';

describe('WineList', () => {
  it('renders correctly', () => {
    const component = shallow(
      <WineList />
    );

    expect(component).toMatchSnapshot();
  });
});
