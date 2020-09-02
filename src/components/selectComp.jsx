import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function SelComp() {
  const { setComp } = useContext(StarWarsContext);
  return (
    <div>
      <label htmlFor="sel" />
      <select
        data-testid="comparison-filter"
        name="cm"
        id="sel"
        onChange={(e) => setComp(e.target.value)}
      >
        <option>Comparação</option>
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
    </div>
  );
}
export default SelComp;
