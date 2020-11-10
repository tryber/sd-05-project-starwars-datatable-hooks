// useEffect mesmo que componenteDidMount
import React, { useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import Body from './Body';
import Select from './Select';
import Filters from './Filters';
import Order from './Order';

function Table() {
  const { isLoading, data, endpoint, filterName } = useContext(StarWarsContext);
  const PlanetsOk = data.length > 0;

  useEffect(() => {
    endpoint();
  }, [endpoint]);

  return (
    <div>
      <input
        type="text"
        data-testid="name-filter"
        onChange={(event) => filterName(event.target.value)}
      />
      <Select />
      <Filters />
      <Order />
      {isLoading && 'Loading...'}
      {!isLoading && PlanetsOk && <Body />}
    </div>
  );
}

export default Table;
