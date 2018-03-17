import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class FIlter extends PureComponent {
  render() {
    const { filter, clicked } = this.props;

    return (
      <div onClick={() => clicked(filter)}>
        {filter}
      </div>
    )
  }
}

export default FIlter;