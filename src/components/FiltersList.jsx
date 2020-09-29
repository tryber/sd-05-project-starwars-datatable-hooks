import React, { useContext } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';

const FiltersList = () => {
  const { filterByNumericValues, setFilterByNumericValues } = useContext(StarWarsContext);
  const filters = filterByNumericValues;

  const HandleClick = (event) => {
    const filterCopy = [...filters];
    const removedArray = filters.map((filterList) => filterList.column);
    filterCopy.splice(removedArray.indexOf(event.target.id), 1);
    setFilterByNumericValues(filterCopy);
  };
  return (
    <div>
      {filters.map((filterList) => (
        <div key={filterList.column} data-testid="filter">
          {`${filterList.column} ${filterList.comparison} ${filterList.value}`}
          <button onClick={(event) => HandleClick(event)}>X</button>
        </div>
      ))}
    </div>
  );
};

export default FiltersList;

// Transparência: Feito com Sid
