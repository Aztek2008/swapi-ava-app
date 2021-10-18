import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { InputFilter } from '../InputFilter/InputFilter';
import { AndOrToggler } from '../AndOrToggler/AndOrToggler';
import { OptionsForFilter } from '../OptionsForFilter/OptionsForFilter';
import {
  setFilmUrlAction,
  setMaxYearAction,
  setMinYearAction,
  setSpecieUrlAction,
} from '../OptionsForFilter/filterOptionsSlice';
import * as M from 'materialize-css';
import css from './Filter.module.css';

let selectInputs: NodeListOf<HTMLInputElement> | null;

export const Filter = () => {
  useEffect(() => {
    // INITIATION OPTIONS DROPDOWN
    M.AutoInit();

    selectInputs = document.querySelectorAll(
      '.select-dropdown.dropdown-trigger'
    );
  }, []);

  const dispatch = useDispatch();

  const clearOptions = () => {
    selectInputs?.forEach((input) => (input.value = 'Choose...'));

    dispatch(setFilmUrlAction(''));
    dispatch(setSpecieUrlAction(''));
    dispatch(setMinYearAction(''));
    dispatch(setMaxYearAction(''));
  };

  return (
    <section style={{ position: 'relative' }}>
      <button
        className={`waves-effect waves-light btn ${css.btnStyle}`}
        onClick={clearOptions}
      >
        Clear all
      </button>
      <OptionsForFilter />
      <div className={css.togglerContStyle}>
        <AndOrToggler />
        <InputFilter />
      </div>
    </section>
  );
};
