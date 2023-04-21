import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Component } from 'react';
import './ContactForm.css';

const initialState = {
  name: '',
  number: '',
};

class ContactForm extends Component {
  state = { ...initialState };

  handleChangeValue = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onAddNewContact({ id: nanoid(), ...this.state });
    this.setState({ ...initialState });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className="form">
        <label className="label">
          Name
          <input
            type="text"
            name="name"
            value={name}
            className="input"
            onChange={this.handleChangeValue}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className="label">
          Number
          <input
            type="tel"
            name="number"
            value={number}
            className="input"
            onChange={this.handleChangeValue}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit" className="button">
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onAddNewContact: PropTypes.func.isRequired,
};

export default ContactForm;
