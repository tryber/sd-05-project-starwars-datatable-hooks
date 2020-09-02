import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

export default function TextFilter() {
  const { loading, setTextInput } = useContext(StarWarsContext);
  return (
    <div>
      {!loading && (
        <div>
          <label htmlFor="name">Busca por planeta:</label>
          <input
            type="text"
            data-testid="name-filter"
            placeholder="Faça sua busca"
            onChange={(e) => setTextInput(e.target.value)}
          />
        </div>
      )}
    </div>
  );
}
