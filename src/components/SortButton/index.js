import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from '../../context/StarWarsContext';

function Button(props) {
  const { setOrder } = useContext(StarWarsContext);
  const { columnValue, radio } = props;
  return (
    <button
      type="button"
      data-testid="column-sort-button"
      onClick={() => setOrder({ column: columnValue, sort: radio })}
    >
      Ordenar
    </button>
  );
}

Button.propTypes = {
  columnValue: PropTypes.string.isRequired,
  radio: PropTypes.string.isRequired,
};

export default Button;
