import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import RemoveFilterButton from './RemoveFilterButton';
import { SWContext } from '../context';

const Item = (props) => {
  const {
    filtersOptions: { numeric: numericValues, comparison: columnValues },
  } = useContext(SWContext);

  const {
    item: { column, comparison, value },
    index,
  } = props;
  const comparisonText = columnValues.find((item) => item.value === comparison);
  const columText = numericValues.find((item) => item.value === column);
  return (
    <li className="filter-item-container" data-testid="filter" key={index}>
      <RemoveFilterButton filterIndex={index} column={columText.value} />
      <span className="filter-item-column">{columText.text}</span>
      <span className="filter-item-comparison">{comparisonText.text}</span>
      <span className="filter-item-value">{value}</span>
    </li>
  );
};

export default Item;

Item.propTypes = {
  item: PropTypes.shape({
    column: PropTypes.string.isRequired,
    comparison: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};
