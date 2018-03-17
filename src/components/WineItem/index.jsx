import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {} from './style.scss';

class WineItem extends PureComponent {
  static propTypes = {
    item: PropTypes.shape({
      name: PropTypes.string,
      country: PropTypes.string,
      region: PropTypes.string,
      grapes: PropTypes.string,
      producer: PropTypes.string
    })
  }

  static defaultProps = {
    name: '',
    country: '',
    region: '',
    description: ''
  }

  state = {
    active: false
  }

  handleClick = () => {
    this.setState(prevState => ({active: !prevState.active}));
  }

  render() {
    let detailsClass= ['details'];
    const { active } = this.state;
    const {
      item: {
        id,
        name,
        country,
        region,
        price,
        description
      }
    } = this.props;
    let statusText = active ? '-' : '+';
    let statusTitle = active ? 'Close' : 'Open';

    if (active) {
      detailsClass.push('active');
    }

    return (
      <div onClick={this.handleClick} className="wine-item">
        <header>
          <p>{name}</p>
        </header>
        
        <div className={detailsClass.join(' ')}>
          <div className="content">
            <div className="item">
              <p>Country:</p>
              <p>{country}</p>
            </div>
          
            <div className="item">
              <p>Region:</p>
              <p>{region}</p>
            </div>

            <div className="item">
              <p>Price:</p>
              <p>{price}</p>
            </div>

            <div className="item">
              <p>Description:</p>
              <p>{description}</p>
            </div>
          
          </div>
          <div className="controls">          
            <button className="remove" onClick={() => this.props.remove(id)}>Remove</button>
          </div>
        </div>
        <div className="status" title={statusTitle}>{statusText}</div>
      </div>
    )
  }
}

export default WineItem;