import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function FilterStatus() {
  const { filterNumeric, setFilterNumeric } = useContext(StarWarsContext);
  return (
    <div className="filtros">
      {(filterNumeric.length > 0) ? <h2>Filtros:</h2> : null}
      {filterNumeric.map(({ column, comparison, value }, indexFilterNumeric) =>
        (<span key={column} data-testid="filter">{`${column} ${comparison} ${value}`}
          <button
            onClick={() => setFilterNumeric(filterNumeric.filter((item, index) =>
            index !== indexFilterNumeric))}
          >
          X</button></span>))}
    </div>
  );
}

export default FilterStatus;
