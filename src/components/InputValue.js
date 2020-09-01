import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const InputValue = () => {
  const { filterByNumericValues, setChange } = useContext(StarWarsContext);
  const setValue = (k, v) => setChange(k, v);
  return (
    <form>
      <label>
        Valor:
        <input
          type="number"
          data-testid="value-filter"
          value={filterByNumericValues.value}
          onChange={(e) => setValue(e.target.value, 'value')}
        />
      </label>
    </form>
  );
};

export default InputValue;
