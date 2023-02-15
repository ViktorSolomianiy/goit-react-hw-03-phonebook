import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import './App.css';

import ContactsForm from './Contacts/ContactsForm';
import Filter from './Filter';
import ContactsList from './Contacts/ContactsList/ContactsList';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handlerSubmit = e => {
    e.preventDefault();
    const { contacts } = this.state;
    const name = e.currentTarget.name.value;
    const number = e.currentTarget.number.value;

    const contactsArr = {
      id: nanoid(),
      name: name,
      number: number,
    };

    this.setState({
      contacts: [contactsArr, ...contacts],
    });

    for (const item of contacts) {
      if (name === item.name) {
        alert(name + ' is already in contacts');
      }
    }

    this.reset();
  };

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;

    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { contacts, filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <div>
        <h1 className="title">Phonebook</h1>

        <ContactsForm contacts={contacts} onSubmit={this.handlerSubmit} />

        <div className="contacts__container">
          <h2 className="contacts__title">Contacts</h2>

          <Filter filter={filter} changeFilter={this.changeFilter} />
          <ContactsList
            options={visibleContacts}
            onDelete={this.deleteContact}
          />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  state: PropTypes.objectOf({
    contacts: PropTypes.array.isRequired,
    filter: PropTypes.string.isRequired,
  }),
};
