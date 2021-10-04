import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { toggleANDAction, toggleORAction } from './AndOrTogglerSlice';

export const AndOrToggler = () => {
  const dispatch = useDispatch();

  const onOrChecker = (e) => {
    const OR = e.target.checked;
    const AND = !e.target.checked;

    OR && dispatch(toggleORAction());
    AND && dispatch(toggleANDAction());
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
