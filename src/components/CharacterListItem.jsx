import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export const CharacterListItem = ({ character, id }) => {
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

CharacterListItem.propTypes = {
  character: PropTypes.object,
  id: PropTypes.number,
};
