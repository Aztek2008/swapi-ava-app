import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as types from '../types';
import { InputFilter } from './InputFilter';
import { AndOrToggler } from './AndOrToggler';
import { CharacterContext } from '../context';
import { OptionsForFilter } from './OptionsForFilter';

const dropInputs = document.querySelectorAll(
  '.select-dropdown.dropdown-trigger'
);
const btnStyle = { position: 'absolute', top: '100px', fontSize: '12px' };
const togglerContStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  height: 'auto',
};

export const Filter = () => {
  useEffect(() => {
    // INITIATION OPTIONS DROPDOWN
    window.M.AutoInit();
  }, []);

  const { dispatchEvent } = useContext(CharacterContext);

  const clearOptions = () => {
    dropInputs.forEach((input) => (input.value = 'Choose...'));

    dispatchEvent(types.SET_FILM_URL, '');
    dispatchEvent(types.SET_FILTER_BY_SPECIES, '');
    dispatchEvent(types.SET_MIN_YEAR_OPTION, '');
    dispatchEvent(types.SET_MAX_YEAR_OPTION, '');
  };

  return (
    <section style={{ position: 'relative' }}>
      <button
        style={btnStyle}
        className='waves-effect waves-light btn'
        onClick={clearOptions}
      >
        Clear all
      </button>
      <OptionsForFilter />
      <div style={togglerContStyle}>
        <AndOrToggler />
        <InputFilter />
      </div>
    </section>
  );
};

Filter.propTypes = {
  types: PropTypes.arrayOf(PropTypes.string),
  InputFilter: PropTypes.element,
  AndOrToggler: PropTypes.element,
  CharacterContext: PropTypes.element,
  OptionsForFilter: PropTypes.element,
  dispatchEvent: PropTypes.func,
};
