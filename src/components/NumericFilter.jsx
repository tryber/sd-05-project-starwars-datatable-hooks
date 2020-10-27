import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const NumericFilter = () => {
  const {
     filterColumns, column, setColumn, comparison, setComparison, value,
     setValue, numericFilter, setNumericFilter, controller, setController,
  } = useContext(StarWarsContext);

  const handleColumn = (e) => setColumn(e.target.value);
  const handleComparison = (e) => setComparison(e.target.value);
  const handleValue = (e) => setValue(e.target.value);

  return (
    <div>
      <select
        data-testid="column-filter"
        onChange={handleColumn}
        name="column"
      >
        <option value="">Colunas</option>
        {filterColumns.map((item) => <option key={item} value={item}>{item}</option>)}
      </select>

      <select
        data-testid="comparison-filter"
        /*
        value={}
        */
        onChange={handleComparison}
        name="comparison"
      >
        <option value="">Comparação</option>
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>

      <input
        name="input"
        /*
        value={}
        */
        type="text"
        data-testid="value-filter"
        onChange={handleValue}
      />

      <button
        data-testid="button-filter"
        onClick={clickHandler}
      >
        Filtrar
      </button>
    </div>
  );
};

export default NumericFilter;
