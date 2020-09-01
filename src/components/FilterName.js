import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const FilterName = () => {
  const { dataApi, setFilterName } = useContext(StarWarsContext);
  return (
    <div>
      {dataApi.length !== 0 && (
        <div>
          <h4>Search for specific planet:</h4>
          <input
            data-testid="name-filter"
            type="text"
            name=""
            onChange={(e) => setFilterName({ filterByName: { name: e.target.value } })}
          />
        </div>
      )}
    </div>
  );
};

export default FilterName;
