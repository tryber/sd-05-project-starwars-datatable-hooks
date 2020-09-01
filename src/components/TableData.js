import React from 'react';

function filterByNumber(planets, myFilter) {
  if (myFilter.comparison === 'maior que') {
    return planets.filter((planet) => Number(planet[myFilter.column]) > Number(myFilter.value));
  } else if (myFilter.comparison === 'menor que') {
    return planets.filter((planet) => Number(planet[myFilter.column]) < Number(myFilter.value));
  } else if (myFilter.comparison === 'igual a') {
    return planets.filter((planet) => Number(planet[myFilter.column]) === Number(myFilter.value));
  }
  return planets;
}

class TableData extends React.Component {

  render() {
    const { data, filterName, filterNumber } = this.props;
    let allPlanets = data;
    filterNumber.forEach((filter) => {
      allPlanets = filterByNumber(allPlanets, filter);
    });
    return (
      <tbody className="planets-table">
        {allPlanets
          .filter((planet) => planet.name.includes(filterName.name))
          .map((planet) => (
            <tr key={planet.name}>
              <td key={planet.name}>{planet.name}</td>
              <td key={planet.rotation_period}>{planet.rotation_period}</td>
              <td key={planet.orbital_period}>{planet.orbital_period}</td>
              <td key={planet.diameter}>{planet.diameter}</td>
              <td key={planet.climate}>{planet.climate}</td>
              <td key={planet.gravity}>{planet.gravity}</td>
              <td key={planet.terrain}>{planet.terrain}</td>
              <td key={planet.surface_water}>{planet.surface_water}</td>
              <td key={planet.population}>{planet.population}</td>
              <td key={planet.films}>{planet.films}</td>
              <td key={planet.url}>{planet.url}</td>
              <td key={planet.created}>{planet.created}</td>
              <td key={planet.edited}>{planet.edited}</td>
            </tr>
          ))}
      </tbody>
    );
  }
}

// const mapStateToProps = (state) => ({
//   data: state.planetReducer.data,
//   filterName: state.filters.filterByName,
//   filterNumber: state.filters.filterByNumericValues,
// });

// TableData.propTypes = {
//   data: propTypes.arrayOf(propTypes.object).isRequired,
//   filterName: propTypes.shape({
//     filterByName: propTypes.object,
//   }).isRequired,
//   filterNumber: propTypes.arrayOf(propTypes.object).isRequired,
// };

// export default connect(mapStateToProps, null)(TableData);
export default TableData;
