import React, { useState, useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
// import propTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { filterByNumber, deleteFilter } from '../actions/index';

// Referência: ajuda Anderson Godoy.

const dropdownSel = [
  'selecione',
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

const comparisonSel = ['selecione', 'maior que', 'menor que', 'igual a'];

function FilterByNumber() {
  const { filterNumber, setFilterNumber } = useContext(StarWarsContext);
  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('');
  const [value, setValue] = useState('');

  // handleDefault() {
  //   // const { changeNumber } = this.props;
  //   // const { column, comparison, value } = this.state;
  //   if (column === 'selecione' || comparison === 'selecione' || value === '') {
  //     alert('Todos os campos são obrigatórios');
  //   } else {
  //     setFilterNumber({ column, comparison, value });
  //   }
  // }

  const handleClick = (columns) => {
    const cleanedFilter = filterNumber.filter((e) => e.column !== columns);
    setFilterNumber(cleanedFilter);
  };

  // handleClick(e) {
  //   const { filterNumber, removeFilter } = this.props;
  //   const cleanedFilter = [];
  //   for (let i = 0; i < filterNumber.length; i += 1) {
  //     if (filterNumber[i].column !== e.target.name) {
  //       cleanedFilter.push(filterNumber[i]);
  //     }
  //   }
  //   removeFilter(cleanedFilter);
  // }

  // const { dropdownSel } = this.state;
  // const { filterNumber } = this.props;
  // // const columnsFiltered = filterNumber.map((e) => e.column);
  // const columnsFiltered = [...dropdownSel];
  if (filterNumber.length > 0) {
    filterNumber.forEach((item) => {
      dropdownSel.splice(dropdownSel.indexOf(item.column), 1);
    });
  }

  return (
    <div>
      <select
        name="column" data-testid="column-filter" onChange={(e) => setColumn(e.target.value)}
      >
        {dropdownSel.map((options) => <option value={options}>{options}</option>)}
      </select>
      <select
        name="comparison"
        data-testid="comparison-filter" onChange={(e) => setComparison(e.target.value)}
      >
        {comparisonSel.map((options) => <option value={options}>{options}</option>)}
      </select>
      <input
        name="value" type="number"
        data-testid="value-filter" onChange={(e) => setValue(e.target.value)}
      />
      <button
        data-testid="button-filter"
        onClick={() => setFilterNumber([...filterNumber, { column, comparison, value }])}
      >
        Filtrar
      </button>
      {filterNumber.map((listPar) =>
        <span data-testid="filter">{`${listPar.column} ${listPar.comparison} ${listPar.value}`}
          <button name={listPar.column} onClick={() => handleClick(listPar.column)}>
            X
          </button>
        </span>,
      )}
    </div>
  );
}

export default FilterByNumber;
