import React, { useEffect } from 'react';
import { AndOrToggler } from './AndOrToggler';
import { InputFilter } from './InputFilter';
import { OptionsForFilter } from './OptionsForFilter';

export const Filter = () => {
  useEffect(() => {
    window.M.AutoInit();
  }, []);

  return (
    <>
      <OptionsForFilter />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          height: 'auto',
        }}
      >
        <AndOrToggler />
        <InputFilter />
      </div>
    </>
  );
};
