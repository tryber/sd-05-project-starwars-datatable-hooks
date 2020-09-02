import React, { useState, useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

export default function Filtros() {
  const { setFiltros, options } = useContext(StarWarsContext);
  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('');
  const [value, setValue] = useState('');
  const changeFilters = () => {
    if (column === 'selecione' || comparison === 'selecione' || value === '') {
      alert('Todos os campos são Obrigatórios');
    } else {
      setFiltros([{ column, comparison, value }]);
    }
  };
  return (
    <div>
      <select
        data-testid="column-filter"
        name="column"
        onChange={(event) => setColumn(event.target.value)}
      >
        {options.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
      <select
        data-testid="comparison-filter"
        name="comparison"
        onChange={(event) => setComparison(event.target.value)}
      >
        <option value="selecione">selecione</option>
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="number"
        data-testid="value-filter"
        name="value"
        onChange={(event) => setValue(event.target.value)}
      />
      <button type="button" data-testid="button-filter" onClick={() => changeFilters()}>
        Filtrar
        </button>
    </div>
  );
}
