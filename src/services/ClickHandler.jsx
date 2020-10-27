// material pesquisado: https://pt-br.reactjs.org/docs/hooks-custom.html

import { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
const ClickHandler = () => {
  const {
    column, comparison, value, numericFilter, setNumericFilter, controller, setController,
  } = useContext(StarWarsContext);
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
}
      export default ClickHandler;
