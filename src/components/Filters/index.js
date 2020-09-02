import React, { useContext } from 'react';
import StarWarsContext from '../../context/StarWarsContext';

function Filters() {
  const { numberFilter, setNumberFilter } = useContext(StarWarsContext);

  const handleClick = (e) => {
    const newFilter = [];
    for (let i = 0; i < numberFilter.length; i += 1) {
      if (numberFilter[i].column !== e.target.name) {
        newFilter.push(numberFilter[i]);
      }
    }
    setNumberFilter(newFilter);
  };

  return (
    <div>
      {numberFilter.map((each) => (
        <span key={each.column} data-testid="filter">
          {`Filtrando ${each.column} ${each.comparison} ${each.value}`}{' '}
          <button
            name={each.column}
            type="button"
            onClick={(e) => handleClick(e)}
          >
            X
          </button>
        </span>
      ))}
    </div>
  );
}

export default Filters;
