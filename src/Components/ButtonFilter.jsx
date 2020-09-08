import React from 'react';
import PropTypes from 'prop-types';

const ButtonFilter = (props) => {
  const { handleClick } = props;
  return (
    <div>
      <button
        type="button"
        className="button-set-filter"
        data-testid="button-filter"
        onClick={() => {
          handleClick();
        }}
      >
        Filtrar
      </button>
    </div>
  );
};

export default ButtonFilter;

ButtonFilter.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
