import React, {useContext} from 'react';
import StarWarsContext from '../context/StarWarsContext';

const InputComparison = () => {
  const { filterByNumericValues, setChange } = useContext( StarWarsContext );
  const operators = [
      '',
      'maior que',
      'menor que',
      'igual a',
    ];
  return (
    <form>
      <label>
        Comparação: 
          <select
          data-testid="comparison-filter"
          value={filterByNumericValues.comparison}
          onChange={(e) => setChange(e.target.value, 'comparison')}
        >
          {operators.map((operator) => (
          <option key={operator} value={operator}>
              {operator}
              </option>
          ))}
        </select>
      </label>
    </form>
  );
}

export default InputComparison;