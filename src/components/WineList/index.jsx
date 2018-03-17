import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import WineItem from '../WineItem';
import {} from './style.scss';

class WineList extends PureComponent {
  static propTypes = {
    wineItems: PropTypes.array.isRequired
  }

  static defaultProps = {
    wineItems: []
  }

  render() {
    const { 
      wineItems,
      edit,
      remove
    } = this.props;

    return (
      <div className="wine-items">
        {wineItems.map((item, index) => (
          <WineItem
            key={index}
            item={item}
            edit={edit}
            remove={this.props.remove}
          />
        ))}
      </div>
    )
  }
}

export default WineList;