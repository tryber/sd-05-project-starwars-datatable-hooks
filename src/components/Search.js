import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Search() {

  const { filterParameter, setFilterParameter } = useContext(StarWarsContext);
    return (
      <div className="search">
        Procurar:
        <input type="text" value={filterParameter.name} onChange={(event) => setFilterParameter({name: event.target.value})} data-testid="name-filter" />
      </div>
    );
}

export default Search;
