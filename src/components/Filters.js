import React, { useContext } from 'react';

import { StarWarsContext } from '../context/StarWarsContextProvider';

function NameFilter() {
  const { setNameFilter } = useContext(StarWarsContext);

  return (
    <section>
      <input
        data-testid="name-filter"
        type="text"
        name="filter-name"
        onChange={(event) => setNameFilter(event.target.value)}
        placeholder="Search planet by name"
      />
    </section>
  );
}

function Filters() {
  return <NameFilter />;
}

export default Filters;
