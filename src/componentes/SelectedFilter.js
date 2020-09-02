import React, { useContext } from 'react';
import StarWarsContext from '../context/context';

function SelectedFilter() {
  const { filterByNumericValues, setFilterByNumericValues } = useContext(StarWarsContext);
  // função que remove os filtros
  const handleClick = (rmvItem) => {
    const index = filterByNumericValues.findIndex(
      (item) => item.column === rmvItem.column,
    );
    const newArray = [...filterByNumericValues];
    newArray.splice(index, 1);
    return setFilterByNumericValues(newArray);
  };

  return (
    <div>
      {filterByNumericValues.map((e) => (
        <div key={e.column} data-testid="filter">
          <div>{e.column}</div>
          <div>{e.comparison}</div>
          <div>{e.value}</div>
          <button
            type="button"
            onClick={() => handleClick(e.column)}
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
}

export default SelectedFilter;
