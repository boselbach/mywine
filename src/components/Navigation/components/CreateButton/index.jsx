import React, { PureComponent } from 'react';
import {} from './style.scss';

class CreateButton extends PureComponent {
  render() {
    return (
      <div 
        className="create-wine-item" 
        onClick={this.props.showCreate}
        title="Add new wine"
      >+</div>
    )
  }
}

export default CreateButton;