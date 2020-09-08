import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

export default function NumericFilters() {
  const { column, setColumn, comparison, setComparison, value, setValue, setFilterByNumbers } = useContext(StarWarsContext);
  const options = ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
  const options2 = ['menor que', 'maior que', 'igual a'];
  return (
    <div>
      <select
        data-testid="column-filter"
        value={column}
        onChange={(e) => setColumn(e.target.value)}>
        <option defaultValue>Selecione</option>
        {options.map((opcao) => (<option>{opcao}</option>))}
      </select>
      <select
        data-testid="comparison-filter"
        value={comparison} onChange={(e) => setComparison(e.target.value)}>
        <option defaultValue>Selecione</option>
        {options2.map((opcao) => (<option>{opcao}</option>))}
      </select>
      <input
        data-testid="value-filter"
        type="number" value={value}
        onChange={(e) => setValue(e.target.value)} />
      <button
        type="button"
        data-testid="button-filter"
        onClick={() => setFilterByNumbers([{ column, comparison, value }])}>Filtrar</button>
    </div>
  );
}
