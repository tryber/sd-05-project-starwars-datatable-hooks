import React, { useState, useContext } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';

export default function SearchBar() {
  const [inputText, setInputText] = useState('');
  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('');
  const [value, setValue] = useState('');

  const { changeFilterByName, changeFilterByNumeric } = useContext(StarWarsContext);

  function handleSelectColumn(event) { setColumn(event.target.value); }
  function handleSelectComparison(event) { setComparison(event.target.value); }
  function hC(event) {
    setInputText(event.target.value);
    return changeFilterByName(event.target.value);
  }
  function hNv(event) { setValue(event.target.value); }
  function submitToContext() { changeFilterByNumeric(column, comparison, value); }

  function selectParameter() {
    const array = ['select', 'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
    return (
      <select data-testid="column-filter" onChange={handleSelectColumn}>
        {array.map((item) => <option value={item} id={item}>{item}</option>)}
      </select>
    );
  }
  function filterForm() {
    const array = ['select', 'maior que', 'menor que', 'igual a'];
    return (
      <div>
        {selectParameter()}
        <select data-testid="comparison-filter" onChange={handleSelectComparison}>
          {array.map((item) => <option value={item} id={item}>{item}</option>)}
        </select>
        <input type="number" data-testid="value-filter" value={value} onChange={hNv} />
        <button type="button" data-testid="button-filter" onClick={submitToContext}>
          Acionar Filtro
        </button>
      </div>
    );
  }
  return (
    <div>
      <form>
        <label htmlFor="name-filter">Procurar</label>
        <input onChange={hC} value={inputText} data-testid="name-filter" />
      </form>
      {filterForm()}
    </div>
  );
}
