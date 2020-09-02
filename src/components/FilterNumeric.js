import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function DinamicChosenFilters() {
  const { filterNumeric } = useContext(StarWarsContext);
  const arrayColunas = ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
  const arraySelected = [];
  filterNumeric.forEach((item) => arraySelected.push(item.column));
  const withOutSelected = arrayColunas.filter((item) => !arraySelected.includes(item));
  return withOutSelected;
}

function FilterNumeric() {
  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('');
  const [input, setInput] = useState('');
  const { filterNumeric, setFilterNumeric } = useContext(StarWarsContext);
  const handleComparison = (e) => setComparison(e.target.value);
  const handleColumn = (e) => setColumn(e.target.value);
  const handleInput = (e) => setInput(e.target.value);

  const onClickHandle = () => {
    if (column === '' || comparison === '' || input === '') {
      alert('Não deixe campos em branco no filtro');
    } else {
      setFilterNumeric([...filterNumeric, { column, comparison, value: input }]);
      setColumn('');
      setComparison('');
      setInput('');
    }
  };


  const arrayColunas = DinamicChosenFilters();
  return (
    <div>
      <select data-testid="column-filter" onChange={handleColumn} name="column">
        <option value="">Colunas</option>
        {arrayColunas.map((item) => <option key={item} value={item}>{item}</option>)}
      </select>
      <select
        data-testid="comparison-filter" value={comparison}
        onChange={handleComparison} name="comparison"
      >
        <option value="">Comparação</option>
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        name="input" value={input} type="text"
        data-testid="value-filter" onChange={handleInput}
      />
      <button data-testid="button-filter" onClick={onClickHandle}>Filtrar</button>
    </div>
  );
}

export default FilterNumeric;
