import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

export default function TBody() {
  const { data, name, filtersByNum } = useContext(StarWarsContext);
  let dataFilter;
  dataFilter = data.filter((planet) => (name === '' ? true : planet.name.toLowerCase().includes(name.toLowerCase())));
  filtersByNum.forEach((obj) => {
    switch (obj.comparison) {
      case 'maior que':
        dataFilter = dataFilter.filter((planet) => Number(planet[obj.column]) > obj.value);
        break;
      case 'menor que':
        dataFilter = dataFilter.filter((planet) => Number(planet[obj.column]) < obj.value);
        break;
      case 'igual a':
        dataFilter = dataFilter.filter((planet) => (planet[obj.column]) === obj.value);
        break;
      default:
        return dataFilter;
    }
    return dataFilter;
  });
  return (
    <tbody>
      {dataFilter.map((planet) => (
        <tr key={planet.name}>
          {Object.entries(planet)
            .filter((element) => element[0] !== 'residents')
            .map((element) => <td key={element[1]}>{element[1]}</td>)}
        </tr>
      ))}
    </tbody>
  );
}
