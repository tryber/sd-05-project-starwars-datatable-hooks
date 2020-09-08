import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { SWContext } from '../context';

const RemoveFilterButton = (props) => {
  const { filterIndex } = props;
  const { removeFilter } = useContext(SWContext);
  return (
    <button
      className="remove-filter-button"
      type="button"
      onClick={() => {
        removeFilter(filterIndex);
        // togglingRender(column);
      }}
    >
      X
    </button>
  );
};

export default RemoveFilterButton;

RemoveFilterButton.propTypes = {
  filterIndex: PropTypes.number.isRequired,
};
