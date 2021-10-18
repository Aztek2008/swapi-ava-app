import { ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { inputFilterAction } from './inputFilterSlice';

export const InputFilter = () => {
  const dispatch = useDispatch();

  const handleInputChange = (e: ChangeEvent<HTMLFormElement>): void => {
    dispatch(inputFilterAction(e.target.value));
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
