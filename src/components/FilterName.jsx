import React, { useContext } from 'react';
import StarWarsContext from '../service/StarWarsContext';

const FilterName = () => {
  const { setFilterName } = useContext(StarWarsContext);
  return (
    <div>
      <input
        data-testid="name-filter"
        type="text"
        placeholder="Type a planet name"
        onChange={
          (event) => (setFilterName(event.target.value))}
      />
    </div>
  );
};

export default FilterName;

/* codigo aprendido em https://dev.to/asimdahall/simple-search-form-in-react-using-hooks-42pg
codigo do Alexander consultado para solucionar onChange do input
https://github.com/tryber/sd-05-project-starwars-datatable-hooks/pull/42
*/
