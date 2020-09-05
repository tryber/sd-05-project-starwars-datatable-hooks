import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import useForceUpdate from 'use-force-update';


// comondos a executar ao aparter o botão do filtro.
function clickDuplo(column, comparison, value, filterByNumericValues, setFilterByNumericValues, setColumnFilter) {
  setFilterByNumericValues([...filterByNumericValues, { column, comparison, value }]);
  const colunas = ['COLUNAS', 'population', 'orbital_period',
  'diameter', 'rotation_period', 'surface_water',
];
if (filterByNumericValues.length > 0) {
    filterByNumericValues.forEach((Select) => {
      colunas.splice(colunas.indexOf(Select.column), 1);
      setColumnFilter(colunas);
    });
  }
};

// filtrar pela coluna.
function FilterValues() {
  const { filterByNumericValues, setFilterByNumericValues, setColumnFilter, columnFilter } = useContext(StarWarsContext);
  const comparação = [['COMPARAÇÃO'], ['maior que'], ['igual a'], ['menor que']];
  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('');
  const [value, setValue] = useState('');
  const forceUpdate = useForceUpdate();
  const SelectFilter = (event) => {
    if (event.target.name === 'column') {
      setColumn(event.target.value);
    } else if (event.target.name === 'comparison') {
      setComparison(event.target.value);
    } else {
      setValue(event.target.value);
    }
  };
  
  return (
    <div>
      <div>
        <select
          data-testid="column-filter" type="ComboBox"
          name="column" onChange={(event) => SelectFilter(event)}
        >
          {(columnFilter.filter((parametro) => (parametro))).map((value) =>
            <option key={value}>{value}</option>)}
        </select>
        <select
          data-testid="comparison-filter" type="ComboBox"
          name="comparison" onChange={(event) => SelectFilter(event)}
        >
          {comparação.map((value) => <option key={value}>{value}</option>)}
        </select>
      </div>
      <div>
        <input
          data-testid="value-filter" type="number" name="value"
          onChange={(event) => SelectFilter(event)}
        />
      </div>
      <button
        data-testid="button-filter" onClick={() => {
          clickDuplo(column, comparison, value, filterByNumericValues, setFilterByNumericValues, setColumnFilter);
          forceUpdate()
        }}
      >
      Filtrar
      </button>
    </div>
  );
}

function Header() {
  const { setFilterByName, filterByNumericValues } = useContext(StarWarsContext);
  console.log(filterByNumericValues)

// excluir seleção.
/* function removeFilter() {
  const { filters } = this.props;
  console.log(filters)
  if (filters.length > 0) {
    return (
      <div>
        <div>
          <p className="textHeder">Filtros</p>
        </div>
        <div >
          {filters.map((filtro) => (
            <div data-testid="filter" className="removeFilterItem" key={filtro.column}>
              <button className="buttonRemove" onClick={() => (this.clickRemove(filtro))}>
                X
              </button>
              <div>
                {filtro.column} {filtro.comparison} {filtro.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return ('');
}
function clickRemove(filtro) {
  this.props.clearFilter(filtro.column);
  this.colunasSelact();
} */

  // header visual para o usuário.
  return (
    <div className="header">
      <div className="prourarNome">
        <p className="textHeder">Procurar pelo nome:</p>
        <input
          data-testid="name-filter" type="text" name="name-filter"
          onChange={(event) => { setFilterByName({ name: event.target.value }); }}
        />
      </div>
      <div className="filtrarValorNumber">
        <FilterValues />
      </div>
      {/* <div className="removeFilter">
        {removeFilter()}
      </div> */}
    </div>
  );
}

export default Header;
