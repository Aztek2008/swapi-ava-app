import { IListItemProps } from '../typings/models';
import { useHistory } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export const CharacterListItem = ({ character, id }: IListItemProps) => {
  const history = useHistory();
  return (
    <NavLink
      to={`/details/${id}`}
      className='collection-item'
      onClick={() => history.push(`/details/${id}`)}
    >
      {character.name}
    </NavLink>
  );
};
