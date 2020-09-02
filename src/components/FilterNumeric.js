import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function FilterNumeric() {
  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('');
  const [input, setInput] = useState('');

  const onChangeHandle = (event) => {
    const { name, value } = event.target;
    if ( name === 'column') {
      setColumn(value);
    } else if (name === 'comparison') {
      setComparison(value);
    } else if(name === 'input') {
      setInput(value);
    }
  }

  const onClickHandle = () => {
    if (column === '' || comparison === '' || input === '') {
      alert('Não deixe campos em branco no filtro');
    } else {
      setFilterNumeric([...filterNumeric, {column, comparison, value: input}]);
      setColumn('');
      setComparison('');
      setInput('');
    }
  }

  const dinamicChosenFilters = () => {
    const arrayColunas = ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
    const arraySelected = [];
    filterNumeric.forEach(({ column }) => arraySelected.push(column));
    const withOutSelected = arrayColunas.filter((item) => !arraySelected.includes(item));
    return withOutSelected;
  }
    const { filterNumeric, setFilterNumeric } = useContext(StarWarsContext);
    const arrayColunas = dinamicChosenFilters();

    return (
      <div>
        <select data-testid="column-filter" onChange={onChangeHandle} name="column">
          <option value="">Colunas</option>
          {arrayColunas.map((item) => <option key={item} value={item}>{item}</option>)}
        </select>
        <select
          data-testid="comparison-filter" value={comparison}
          onChange={onChangeHandle} name="comparison"
        >
          <option value="">Comparação</option>
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <input
          name="input" value={input} type="text"
          data-testid="value-filter" onChange={onChangeHandle}
        />

        <button data-testid="button-filter" onClick={onClickHandle}>Filtrar</button>
      </div>
    );
}

export default FilterNumeric;
