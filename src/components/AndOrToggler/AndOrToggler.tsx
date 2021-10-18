import { ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { toggleANDAction, toggleORAction } from './toggleOptionSlice';

export const AndOrToggler = () => {
  const dispatch = useDispatch();

  const onOrChecker = (event: ChangeEvent<HTMLInputElement>): void => {
    const OR: boolean = event.target.checked;
    const AND: boolean = !event.target.checked;

    OR && dispatch(toggleORAction());
    AND && dispatch(toggleANDAction());
  };

  return (
    <div id='toggle'>
      <label>Choose filter option</label>
      <div className='switch'>
        <label>
          AND
          <input type='checkbox' onChange={onOrChecker} />
          <span className='lever'></span>
          OR
        </label>
      </div>
    </div>
  );
};
