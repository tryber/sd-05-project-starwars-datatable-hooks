import React, { useContext } from 'react';
import StarWarsContext from '../../context/StarWarsContext';
import Select from '../Select';

function TextForm() {
  const {
    /* filters, */
    setColumn,
    setCO,
    setValue,
    setNumberFilter,
    column,
    comparison,
    value,
    numberFilter
  } = useContext(StarWarsContext);
  
  /* const { filterByNumericValues } = filters; */
  /* const filtro = filterByNumericValues; */
  const CO = ['Comparação', 'maior que', 'menor que', 'igual a'];
  const colunas = [
    'Coluna',
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  if (numberFilter.length > 0) {
    numberFilter.forEach((each) => {
      colunas.splice(colunas.indexOf(each.column), 1);
    });
  }

  return (
    <div>
      <Select
        name="column"
        onChange={(e) => setColumn(e.target.value)}
        id="column-filter"
        options={colunas}
      />
      <Select
        name="comparison"
        onChange={(e) => setCO(e.target.value)}
        id="comparison-filter"
        options={CO}
      />
      <label htmlFor="value">
        <input
          name="value"
          type="number"
          data-testid="value-filter"
          onChange={(e) => setValue(e.target.value)}
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={() => setNumberFilter([...numberFilter, {column, comparison, value}])}>
        Filtrar
      </button>
      <div>
        {/* {filtro.map((each) => (
          <span key={each.column} data-testid="filter">
            {`Filtrando ${each.column} ${each.comparison} ${each.value}`}{' '}
            <button name={each.column} type="button" onClick={this.hClick}>
              X
            </button>
          </span>
        ))} */}
      </div>
    </div>
  );
}

export default TextForm;
