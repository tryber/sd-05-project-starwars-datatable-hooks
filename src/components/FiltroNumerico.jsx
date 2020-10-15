import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const rS = ['', 'population', 'rotation_period', 'diameter', 'surface_water', 'orbital_period'];

function FiltroNumerico() {
  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('');
  const [value, setValue] = useState('');
  const { filterByNumericValues, setFilterByNumericValues } = useContext(StarWarsContext);
  return (
    <div>
      <select
        onChange={(event) => setColumn(event.target.value)}
        data-testid="column-filter"
        name="column"
      >
        {rS.map((event) => (
          <option value={event} key={event}>{event}</option>
        ))}
      </select>
      <select
        onChange={(event) => setComparison(event.target.value)}
        data-testid="comparison-filter"
        name="comparison"
      >
        <option>Comparison</option>
        <option value="maior que">maior que</option>
        <option value="igual a">igual a</option>
        <option value="menor que">menor que</option>
      </select>
      <input
        onChange={(event) => setValue(event.target.value)}
        data-testid="value-filter"
        name="value"
      />
      <button
        data-testid="button-filter"
        onClick={() =>
          setFilterByNumericValues([...filterByNumericValues, { column, comparison, value }])
        }
      >
        Submete
      </button>
    </div>
  );
}


/* {remove.map((x) => (
      <div data-testid="filter">
        <button onClick={this.props.tiraX} id={x.column}>
          X
        </button>
        {x.column}
      </div>
    ))} */

export default FiltroNumerico;
