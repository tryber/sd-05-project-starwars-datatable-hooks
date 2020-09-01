import React, { useContext } from 'react';
import StarWarsContext from '../../context/StarWarsContext';

function TextForm() {
  const { setTextForm } = useContext(StarWarsContext);

  return (
    <form>
      <label htmlFor="planets">
        <input
          data-testid="name-filter"
          name="planets"
          type="text"
          onChange={(e) => setTextForm(e.target.value)}
        />
      </label>
    </form>
  );
}

export default TextForm;
