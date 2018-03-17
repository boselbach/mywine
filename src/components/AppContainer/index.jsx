import React, { PureComponent } from 'react';
import Navigation from '../Navigation';
import Loading from '../Loading';
import WineList from '../WineList';
import AddForm from '../AddForm';
import api from '../../utils/dataApi';
import filter from '../../utils/filter';
import {} from './style.scss';

class AppContainer extends PureComponent {
  state = {
    isLoading: true,
    wineItems: false,
    filters: [],
    showCreate: false
  }

  async componentDidMount() {
    const wineItems = await api.getWines();
    const filters = filter.getFilterTypes();

    this.setState({
      wineItems,
      filters,
      isLoading: false
    });
  }

  handleCreate = (item) => {
    let id = api.getNextId(this.state.wineItems);

    item.id = id;
    this.setState(prevState => ({
      wineItems: [...prevState.wineItems, item],
      showCreate: false
    }), () => {
      api.saveWines(this.state.wineItems);
    });
  }

  handleRemove = (id) => {
    this.setState(prevState => ({
      wineItems: prevState.wineItems.filter(item => item.id !== id)
    }), () => {
      api.saveWines(this.state.wineItems);
    });
  }

  handleFilterClicked(filter) {
    alert(filter);
  }

  handleShowCreate = (state) => {
    this.setState({showCreate: state});
  }

  handleCancelCreate = () => {
    this.setState({
      showCreate: false,
      item: false
    });
  }

  render(){
    const { 
      isLoading, 
      wineItems, 
      filters, 
      showCreate,
      item
    } = this.state;
    
    return (
      <section className="app-container">
        <Navigation 
          filters={filters}
          showCreate={this.handleShowCreate}
          filterClicked={this.handleFilterClicked}
        />
        {isLoading ? (
          <Loading />
        ) : (
          <WineList 
            wineItems={wineItems} 
            remove={this.handleRemove}
          />
        )}

        {showCreate ? (
          <AddForm 
            create={this.handleCreate}
            cancelCreate={this.handleCancelCreate}
            item={item}
          />
        ) : null}
      </section>
    )
  }
  
}

export default AppContainer;