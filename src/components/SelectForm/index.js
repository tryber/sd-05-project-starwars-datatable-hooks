import React, { useContext } from 'react';
import StarWarsContext from '../../context/StarWarsContext';
import Select from '../Select';
import ValueInput from '../ValueInput';

const colunas1 = [
  'Coluna',
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

function SelectForm() {
  const {
    setColumn,
    setCO,
    setValue,
    setNumberFilter,
    column,
    comparison,
    value,
    numberFilter,
  } = useContext(StarWarsContext);
  const CO = ['Comparação', 'maior que', 'menor que', 'igual a'];
  const colunas = [...colunas1];
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
        options={colunas}
      />
      <Select
        name="comparison"
        onChange={(e) => setCO(e.target.value)}
        options={CO}
      />
      <ValueInput onChange={(e) => setValue(e.target.value)} />
      <button
        type="button"
        data-testid="button-filter"
        onClick={() =>
          setNumberFilter([...numberFilter, { column, comparison, value }])
        }
      >
        Filtrar
      </button>
    </div>
  );
}

export default SelectForm;
