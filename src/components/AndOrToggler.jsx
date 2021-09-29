import React from 'react';

export const AndOrToggler = () => {
  return (
    <div>
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
