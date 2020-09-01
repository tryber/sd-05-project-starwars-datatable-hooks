import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const properties = [
  '',
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

const InputColumn = () => {
  const { filters, property, setChange } = useContext(StarWarsContext);
  const getProperty = () => {
    const propUpdated = filters.filterByNumericValues.map(({ column }) => column);
    return properties.filter((propriety) => !propUpdated.includes(propriety));
  };
  const attributes = getProperty();
  return (
    <form>
      <label htmlFor="column-filter">
        Filtrar por:
        <select
          data-testid="column-filter"
          value={property}
          onChange={(e) => setChange(e.target.value, 'column')}
        >
          {attributes.map((attribute) => (
            <option key={attribute} value={attribute}>
              {attribute}
            </option>
          ))}
        </select>
      </label>
    </form>
  );
};

export default InputColumn;
