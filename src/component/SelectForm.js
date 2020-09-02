import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import Select from './Select';

function TextForm() {
  const { setColumn, setCO, setValue, setNumberFilter, column, comparison,
    value,
    numberFilter,
  } = useContext(StarWarsContext);

  const CO = ['Comparação', 'maior que', 'menor que', 'igual a'];
  const colunas = ['Coluna', 'population', 'orbital_period', 'diameter',
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
        onClick={() => setNumberFilter([...numberFilter, { column, comparison, value }])}
      >
        Filtrar
      </button>
    </div>
  );
}

export default TextForm;
