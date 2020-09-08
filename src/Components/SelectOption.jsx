import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { SWContext } from '../context';

const SelectOption = (props) => {
  const {
    filterByNumericValues,
    filtersOptions: { numeric, comparison },
  } = useContext(SWContext);

  function selectFilter() {
    const { testId } = props;
    if (testId === 'comparison-filter') return comparison;
    if (testId === 'column-filter') return numeric;
    return [];
  }

  return selectFilter().map(
    ({ value, text }, index) =>
      !filterByNumericValues.some(({ column }) => column === value) && (
        <option value={value} key={`option-item-${index.toString()}`}>
          {text}
        </option>
      ),
  );
};

SelectOption.propTypes = {
  testId: PropTypes.string.isRequired,
};

export default SelectOption;
