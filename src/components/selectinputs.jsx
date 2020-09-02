import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import SelComp from './selectComp';
import InputNumber from './inputnumber';

const cOptions = [
  'coluna',
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];
function SelectsInputs() {
  const {
    column,
    comparison,
    value,
    setCol,
    setFilter,
    filterNumber,
  } = useContext(StarWarsContext);

  const fCheck = [...cOptions];
  if (filterNumber.length > 0) {
    filterNumber.forEach((elements) => {
      if (fCheck.includes(elements.column)) {
        fCheck.splice(fCheck.indexOf(elements.column), 1);
      }
    });
  }
  return (
    <div>
      <label htmlFor="selectColumn">Filtros</label>
      <select
        data-testid="column-filter"
        name="co"
        id="selectColumn"
        onChange={(e) => setCol(e.target.value)}
      >
        {fCheck.map((elements) => (
          <option value={elements}>{elements}</option>
        ))}
      </select>
      <SelComp />
      <InputNumber />
      <button
        type="button"
        data-testid="button-filter"
        onClick={() =>
          setFilter([...filterNumber, { column, comparison, value }])
        }
      >
        Filtrar
      </button>
    </div>
  );
}

export default SelectsInputs;
