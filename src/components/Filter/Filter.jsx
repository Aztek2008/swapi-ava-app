import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { InputFilter } from '../InputFilter/InputFilter';
import { AndOrToggler } from '../AndOrToggler/AndOrToggler';
import { OptionsForFilter } from '../OptionsForFilter/OptionsForFilter';
import { useDispatch } from 'react-redux';
import {
  filterByFilmAction,
  filterBySpeciesAction,
  filterByYearAction,
  setFilmUrlAction,
  setMaxYearAction,
  setMinYearAction,
  setSpecieUrlAction,
} from '../OptionsForFilter/OptionsForFilterSlice';

let selectInputs;
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

    selectInputs = document.querySelectorAll(
      '.select-dropdown.dropdown-trigger'
    );
  }, []);

  const dispatch = useDispatch();

  const clearOptions = () => {
    selectInputs.forEach((input) => (input.value = 'Choose...'));

    dispatch(filterByFilmAction([]));
    dispatch(setFilmUrlAction(''));
    dispatch(filterBySpeciesAction([]));
    dispatch(setSpecieUrlAction(''));

    dispatch(filterByYearAction([]));
    dispatch(setMinYearAction(''));
    dispatch(setMaxYearAction(''));
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
  InputFilter: PropTypes.element,
  AndOrToggler: PropTypes.element,
  CharacterContext: PropTypes.element,
  OptionsForFilter: PropTypes.element,
};