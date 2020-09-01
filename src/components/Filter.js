import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import '../layouts/StarWars.css';

export default function Filter() {
  const { setName } = useContext(StarWarsContext);

  return (
    <div className="filter">
      <form>
        <label htmlFor="name-filter">
          Pesquise pelo nome do planeta:
          <input
            data-testid="name-filter"
            className="filter"
            type="text"
            placeholder="Nome do planeta"
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </form>
    </div>
  );
}
