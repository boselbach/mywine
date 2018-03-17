import React from 'react';
import { shallow } from 'enzyme';
import AppContainer from '../';

describe('ArticleContainer', () => {
  it('renders correctly', () => {
    const component = shallow(
      <AppContainer />
    );

    expect(component).toMatchSnapshot();
  });
});
