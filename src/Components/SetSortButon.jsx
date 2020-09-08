import React from 'react';
import PropTypes from 'prop-types';

const SetSortButon = ({ handleClick }) => {
  return (
    <button
      type="button"
      data-testid="column-sort-button"
      onClick={() => handleClick()}
    >
      Filtrar
    </button>
  );
};

export default SetSortButon;

SetSortButon.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
