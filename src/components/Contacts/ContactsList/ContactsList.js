import React from 'react';
import PropTypes from 'prop-types';
import './ContactsList.css';

const ContactsList = ({ options, onDelete }) => {
  return (
    <ul className="contacts__list">
      {options.map(({ id, name, number }) => {
        return (
          <li className="contacts__item" key={id}>
            <b>{name}:</b> {number}
            <button
              className="contacts__btn"
              onClick={() => onDelete(id)}
              type="button"
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

ContactsList.propTypes = {
  onDelete: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactsList;
