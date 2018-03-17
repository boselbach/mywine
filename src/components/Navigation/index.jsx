import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CreateButton from './components/CreateButton';
import Filter from './components/Filter';
import {} from './style.scss';

class Navigation extends PureComponent {
  static propTypes = {
    filters: PropTypes.array
  }

  static defaultProps = {
    filters: []
  }

  render() {
    const { 
      filters, 
      create,
      filterClicked,
      showCreate
    } = this.props;

    return (
      <header className="navigation">
        <h1>My wine collection</h1>
        <nav>
          {filters.map((filter, index) => (
            <Filter 
              key={index} 
              filter={filter}
              clicked={filterClicked}
            />
          ))}
        </nav>
        <CreateButton showCreate={showCreate} />
      </header>
    )
  }
}

export default Navigation;