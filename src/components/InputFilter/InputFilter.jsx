import PropTypes from 'prop-types';
import React from 'react';
import characters from '../../collections/people.json';
import { useDispatch } from 'react-redux';
import { inputFilterAction } from './InputFilterSlice';

export const InputFilter = () => {
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    let filteredData = characters.filter((value) =>
      value.name.toLowerCase().includes(e.target.value.toLowerCase())
    );

    dispatch(inputFilterAction(filteredData));

    // CLEAR STATE ARRAY OF CHARACTERS WHEN INPUT EMPTY
    e.target.textLength === 0 && dispatch(inputFilterAction([]));
  };

  return (
    <div className='row'>
      <form className='col s10' onChange={handleInputChange}>
        <div className='row'>
          <div className='input-field col s12'>
            <i className='material-icons prefix'>mode_edit</i>
            <textarea
              id='icon_prefix2'
              className='materialize-textarea'
            ></textarea>
            <label htmlFor='icon_prefix2'>Serch here...</label>
          </div>
        </div>
      </form>
    </div>
  );
};

InputFilter.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object),
  dispatchEvent: PropTypes.func,
};
