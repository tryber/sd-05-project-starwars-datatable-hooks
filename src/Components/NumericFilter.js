import React, { useContext, useState } from 'react';
import SelectOptions from './SelectOptions';
import InputNumber from './InputNumber';
import ButtonFilter from './ButtonFilter';
import './NumericFilter.css';
import { SWContext } from '../context';

const DATA_TESTID = {
  COLUMN_FILTER: 'column-filter',
  COMPARISON_FILTER: 'comparison-filter',
};

const NumericFilters = () => {
  const { setNumericValues } = useContext(SWContext);

  const [filterToSend, setFilter] = useState({
    column: '',
    comparison: '',
    value: '',
  });

  function handleChange({ target }) {
    setFilter((state) => ({
      ...state,
      [target.name]: target.value,
    }));
  }

  const resetFilters = () => {
    setFilter({
      column: '',
      comparison: '',
      value: '',
    });
  };

  const handleClick = () => {
    setNumericValues(filterToSend);
    resetFilters();
  };

  return (
    <div className="numeric-filter-container">
      <div className="numeric-selections">
        <SelectOptions
          name="column"
          handleChange={handleChange}
          testId={DATA_TESTID.COLUMN_FILTER}
          key={DATA_TESTID.COLUMN_FILTER}
        />
        <SelectOptions
          name="comparison"
          handleChange={handleChange}
          testId={DATA_TESTID.COMPARISON_FILTER}
          key={DATA_TESTID.COMPARISON_FILTER}
        />
      </div>
      <InputNumber handleChange={handleChange} />
      <ButtonFilter handleClick={handleClick} />
    </div>
  );
};

export default NumericFilters;
