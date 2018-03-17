import React, { PureComponent } from 'react';
import Input from './components/Input';
import Textarea from './components/Textarea';
import {} from './style.scss';

class AddForm extends PureComponent {
  state = {
    name: false,
    country: false,
    region: false,
    description: false,
    price: false,
    year: false,
    error: false
  }

  componentWillReceiveProps(props) {
    if (props.item) {
      this.setState(props.item, () => console.log(this.state));
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();

    let fields = Object.assign({}, this.state);
    delete fields.error;

    if (Object.keys(fields).every(field => fields[field].length > 0)) {
      this.props.create(fields);
    } else {
      this.setState({error: true});
    }
  }

  handleCancel = (event) => {
    event.preventDefault();

    this.props.cancelCreate();
  }

  handleChange = (e) => {
    let { name, value } = e.target;

    if (name in this.state) {
      this.setState({[name]: value});
    }
  }

  render() {
    const { 
      name,
      country,
      region,
      description,
      price,
      error,
      cancel
    } = this.state;

    return (
      <div className="add-form">      
        <form onSubmit={this.handleSubmit}>
          <div className="inner">
            <Input
              name="name"
              type="text"
              change={this.handleChange}
              error={error}
            />
            <Input 
              name="country"
              type="text"
              change={this.handleChange}
              error={error}
              value={country}
            />
            <Input 
              name="region"
              type="text"
              change={this.handleChange}
              error={error}
            />
            <Input 
              name="price"
              type="text"
              change={this.handleChange}
              error={error}
            />
            <Input 
              name="year"
              type="text"
              change={this.handleChange}
              error={error}
            />
            <Textarea
              name="description"
              change={this.handleChange}
            />
          <button>add</button>
          <button onClick={this.handleCancel}>cancel</button>
          </div>
        </form>
      </div>
    )
  }
}

export default AddForm;