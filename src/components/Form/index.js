import React, { useContext } from 'react';
import { StarWarsContext } from '../../context/StarWarsContext';

const Form = () => {



  const { setFilters } = useContext(StarWarsContext);
  return (
    <form>
      <input
        type="text" name="" id="" onChange={(e) => setFilters({filterByName: { name: e.target.value } })}
        data-testid="name-filter"
      />
    </form>
  );
  }

export default Form;
