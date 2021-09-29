import React, { useContext, useEffect } from 'react';
import { AndOrToggler } from './AndOrToggler';
import { InputFilter } from './InputFilter';
import { OptionsForFilter } from './OptionsForFilter';
import * as types from '../types';
import { CharacterContext } from '../context';
const btnStyle = { position: 'absolute', top: '100px', fontSize: '12px' };
const togglerContStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  height: 'auto',
};

export const Filter = () => {
  useEffect(() => {
    window.M.AutoInit();
  }, []);

  const { dispatchEvent } = useContext(CharacterContext);

  const clearOptions = () => {
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
