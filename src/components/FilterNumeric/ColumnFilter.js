import React, { useContext } from 'react';
import { StarWarsContext } from '../../context/StarWarsContext';

// Popula opções na coluna e remove caso o filtro ja tenha sido selecionado
const ColumnFilter = () => {
  const { columns, setColumnFilter, numericFilter } = useContext(StarWarsContext);
  let columnsFiltered = columns;
  // Caso o filtro ja tenha sido selecionado, ira remove o filtro ja selecionado
  numericFilter.forEach((filter) => {
    columnsFiltered = columnsFiltered.filter((el) => filter.column !== el);
  });

  return (
    <select onChange={({ target }) => setColumnFilter(target.value)} data-testid="column-filter">
      {columnsFiltered.map((option) => (
        <option value={option} key={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default ColumnFilter;
