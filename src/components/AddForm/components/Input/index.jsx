import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {} from './style.scss';

class Input extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
  }

  static defaultProps = {
    name: '',
    type: '',
    error: false
  }

  state = {
    valid: false
  }

  handleChange = (event) => {
    this.setState({valid: event.target.value.length > 0});
    this.props.change(event);
  }

  render() {
    let inputClass = ['input'];
    const { valid } = this.state;
    const { 
      name,
      type,
      error,
      value
    } = this.props;

    if (error && !valid) {
      inputClass.push('error');
    }

    return (
      <div className={inputClass.join(' ')}>
        <label htmlFor={name}>{name}</label>
        <input
          name={name}
          type={type} 
          onChange={this.handleChange}
        /> 
      </div>
    )
  }
}

export default Input;