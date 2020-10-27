import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const NumericFilter = () => {
  const {
     filterColumns, column, setColumn, comparison, setComparison, value,
     setValue, numericFilter, setNumericFilter, controller, setController,
  } = useContext(StarWarsContext);

  const handleColumn = (e) => setColumn(e.target.value);
  const handleComparison = (e) => setComparison(e.target.value);
  const handleValue = (e) => setValue(e.target.value);

  const clickHandler = () => {
    switch (column) {
      case 'rotation_period':
        if (controller.rotation_period === true) {
          setNumericFilter([...numericFilter, {
            column, comparison, value,
          }]);
          setController({ ...controller, rotation_period: false });
        } else { alert('filtro repetido'); }

        break;
      case 'orbital_period':
        if (controller.orbital_period === true) {
          setNumericFilter([...numericFilter, {
            column, comparison, value,
          }]);
          setController({ ...controller, orbital_period: false });
        } else { alert('filtro repetido'); }

        break;
      case 'diameter':
        if (controller.diameter === true) {
          setNumericFilter([...numericFilter, {
            column, comparison, value,
          }]);
          setController({ ...controller, diameter: false });
        } else { alert('filtro repetido'); }

      break;
      case 'surface_water':
        if (controller.surface_water === true) {
          setNumericFilter([...numericFilter, {
          column, comparison, value,
          }]);
          setController({ ...controller, surface_water: false });
        } else { alert('filtro repetido'); }
  
        break;
      case 'population':
        if (controller.population === true) {
          setNumericFilter([...numericFilter, {
            column, comparison, value,
          }]);
          setController({ ...controller, population: false });
        } else { alert('filtro repetido'); }

        break;
      default: console.log('Sorry, no match found...');
        break;
    }
  };
  return (
    <div>

      <select
        data-testid="column-filter"
        onChange={handleColumn}
        name="column"
      >
        <option value="">Colunas</option>
        {filterColumns.map((item) => <option key={item} value={item}>{item}</option>)}
      </select>

      <select
        data-testid="comparison-filter"
        /*value={}*/
        onChange={handleComparison}
        name="comparison"
      >
        <option value="">Comparação</option>
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>

      <input
        name="input"
        /*value={}*/
        type="text"
        data-testid="value-filter"
        onChange={handleValue}
      />

      <button
        data-testid="button-filter"
        onClick={clickHandler}
      >
        Filtrar
      </button>

    </div>
  );
};

export default NumericFilter;
