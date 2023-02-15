import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ContactForm.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleNameChange = e => {
    this.setState({ name: e.target.value });
  };

  handleNumberChange = e => {
    this.setState({ number: e.target.value });
  };

  render() {
    const { onSubmit } = this.props;
    const { name, number } = this.state;

    return (
      <form onSubmit={onSubmit} className="form__contaiter">
        <label className="form__label--name">Name</label>
        <input
          className="form__input--name"
          onChange={this.handleNameChange}
          value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />

        <label className="form__label--name">Number</label>
        <input
          className="form__input--name"
          onChange={this.handleNumberChange}
          value={number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />

        <button className="form__btn" type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  state: PropTypes.objectOf({
    number: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),

  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
