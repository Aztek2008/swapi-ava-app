import React, { useContext } from 'react';
import { CharacterContext } from '../context';
import { SET_CHARACTERS_BY_INPUT } from '../types';
import characters from '../collections/people.json';

export const InputFilter = () => {
  const { dispatchEvent } = useContext(CharacterContext);

  const handleInputChange = (e) => {
    let filteredData = characters.filter((value) =>
      value.name.toLowerCase().includes(e.target.value.toLowerCase())
    );

    dispatchEvent(SET_CHARACTERS_BY_INPUT, filteredData);

    // CLEAR STATE ARRAY OF CHARACTERS WHEN INPUT currentCharacter
    e.target.textLength === 0 && dispatchEvent(SET_CHARACTERS_BY_INPUT, []);
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
