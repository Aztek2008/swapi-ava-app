import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { CharacterContext } from '../context';
import { SET_AND_OR_OPTION } from '../types';

export const AndOrToggler = () => {
  const { dispatchEvent } = useContext(CharacterContext);

  const onOrChecker = (e) => {
    const OR = e.target.checked;
    const AND = !e.target.checked;

    OR && dispatchEvent(SET_AND_OR_OPTION, 'or');
    AND && dispatchEvent(SET_AND_OR_OPTION, 'and');
  };

  return (
    <div id='toggle' onClick={onOrChecker}>
      <label>Choose filter option</label>
      <div className='switch'>
        <label>
          AND
          <input type='checkbox' />
          <span className='lever'></span>
          OR
        </label>
      </div>
    </div>
  );
};

AndOrToggler.propTypes = {
  SET_AND_OR_OPTION: PropTypes.string,
  dispatchEvent: PropTypes.func,
  onOrChecker: PropTypes.func,
};
