import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {} from './style.scss';

class Textarea extends PureComponent {
  handleChange = (event) => {
    this.props.change(event);
  }

  render() {
    const { name } = this.props;
    return (
    <div className="textarea">
      <label htmlFor={name}>{name}</label>
      <textarea onChange={this.handleChange} name={name}></textarea>
    </div>
    )
  }
}

export default Textarea;