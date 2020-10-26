import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const FilterDisplay = () => {
  const {
    numericFilter,
    setNumericFilter,
    controller,
    setController,
  } = useContext(StarWarsContext);

  const removeObj = (filter) => {
    const name = filter.column;
    setNumericFilter(numericFilter.filter((e) => (e.column !== name)));
    switch (name) {
      case 'rotation_period':
        setController({ ...controller, rotation_period: true });
        break;
      case 'orbital_period':
        setController({ ...controller, orbital_period: true });
        break;
      case 'diameter':
        setController({ ...controller, diameter: true });
        break;
      case 'surface_water':
        setController({ ...controller, surface_water: true });
        break;
      case 'population':
        setController({ ...controller, population: true });
        break;
      default:
        console.log('Sorry, no match found...');
    }
  };
  return (
    <div>
      { numericFilter.map((filter) => (
        <div key={filter.column}>
          coluna:{filter.column}
          comparação: {filter.comparison}
          valor: {filter.value}
          <button onClick={() => removeObj(filter)}>X</button>
        </div>
      ))}
  </div>
  );
};

export default FilterDisplay;
