import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const InputValue = () => {
  const { number, setChange } = useContext(StarWarsContext);
  // filterByNumericValues,
  const setValue = (k, v) => setChange(k, v);
  return (
    <form>
      <label htmlFor="value-filter">
        Valor:
        <input
          type="number"
          data-testid="value-filter"
          // value={filterByNumericValues?.value}
          value={number}
          onChange={(e) => setValue(e.target.value, 'value')}
        />
      </label>
    </form>
  );
};

export default InputValue;
