import React from 'react';
import PropTypes from 'prop-types';
import './Filter.css';

const Filter = ({ filter, changeFilter }) => {
  return (
    <div className="filter__container">
      <p className="filter__text">Find contacts by name</p>

      <label>
        <input
          className="filter__input"
          type="text"
          value={filter}
          onChange={changeFilter}
        />
      </label>
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

export default Filter;
