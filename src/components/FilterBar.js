import React, { useContext } from 'react';
import propTypes from 'prop-types';
import Select from './Select';
import StarWarsContext from '../context/StarWarsContext';

function Element1(props) {
  const { getChange, getClick } = props;
  return (
    <div>
      <input
        type="number"
        data-testid="value-filter"
        onChange={getChange}
      />
      <button data-testid="button-filter" type="submit" onClick={getClick}>
        Filtrar
      </button>
    </div>
  );
};

export default function FilterBar() {
  const {
    handleText,
    filtersValues,
    handleValues,
    filtersByNum,
    handleFiltersNum,
    resetFilters,
  } = useContext(StarWarsContext);
  const dafaultColumnOpt = ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
  const comparisonOpt = ['maior que', 'menor que', 'igual a'];
  let columnOpt = dafaultColumnOpt;
  filtersByNum.forEach((filter) => {
    columnOpt = columnOpt.filter((opt) => opt !== filter.column);
    return columnOpt;
  });

  const checks = (filtersValues.column && filtersValues.comparison && filtersValues.value);
  return (
    <div>
      <input data-testid="name-filter" type="text" onChange={(e) => handleText(e.target.value)} />
      <Select
        dataTestId="column-filter" defaultOpt="Coluna" arrayOpt={columnOpt}
        onChange={(e) => handleValues({ column: e.target.value })}
      />
      <Select
        dataTestId="comparison-filter" defaultOpt="Comparacao" arrayOpt={comparisonOpt}
        onChange={(e) => handleValues({ comparison: e.target.value })}
      />
      <Element1
        getChange={(e) => handleValues({ value: e.target.value })}
        getClick={() => (checks ? handleFiltersNum(filtersValues) : false)}
      />
      {filtersByNum.map((filter) => (
        <div data-testid="filter">
          <span>{`${filter.column} ${filter.comparison} ${filter.value}`}</span>
          <button
            type="button"
            onClick={() => resetFilters(filtersByNum.filter((d) => d.column !== filter.column))}
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
}

Element1.propTypes = {
  getChange: propTypes.func.isRequired,
  getClick: propTypes.func.isRequired,
};
