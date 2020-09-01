import React, { useContext } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';
// import PropTypes from 'prop-types';
import './Table.css';

function tableBody(planet) {
  return (
    <tr key={planet.name}>
      <td>{planet.name}</td>
      <td>{planet.climate}</td>
      <td>{planet.terrain}</td>
      <td>{planet.diameter}</td>
      <td>{planet.gravity}</td>
      <td>{planet.rotation_period}</td>
      <td>{planet.orbital_period}</td>
      <td>{planet.population}</td>
      <td>{planet.surface_water}</td>
      <td>{planet.films}</td>
      <td>{planet.created}</td>
      <td>{planet.edited}</td>
      <td>{planet.url}</td>
    </tr>
  );
}

export default function TableData() {
  const { data, filters } = useContext(StarWarsContext);
  const { filterByName } = filters;

  /* console.log(data); */

  /* constructor(props) {
    super(props);
    this.numericFilter = this.numericFilter.bind(this);
    this.nameFilter = this.nameFilter.bind(this);
    this.allPlanets = this.allPlanets.bind(this);
  }

  componentDidMount() {
    const { filters } = this.props;
    filters.forEach((filtro) => {
      const { column } = filtro;
      document.getElementById(column).remove();
    });
  }

  numericFilter() {
    const { data, filters } = this.props;
    let planetas = data;
    filters.forEach((filtro) => {
      const { comparison, column, value } = filtro;
      if (comparison === 'maior que') {
        planetas = planetas.filter((planet) => planet[column] > Number(value));
      } else if (comparison === 'menor que') {
        planetas = planetas.filter((planet) => planet[column] < Number(value));
      } else {
        planetas = planetas.filter((planet) => planet[column] === value);
      }
    });
    return (
      <tbody className="table">
        {planetas.map((planet) => tableBody(planet))}
      </tbody>
    );
  }*/

  function nameFilter() {
    const dataFilteredByName = data.filter((planet) => planet.name.includes(filterByName.name));
    return (
      <tbody className="table">
        {dataFilteredByName.map((planet) => tableBody(planet))}
      </tbody>
    );
  }

  function allPlanets() {
    return (
      <tbody className="table">
        {data.map((planet) => tableBody(planet))}
      </tbody>
    );
  }

  if (filterByName.name !== '') {
    return nameFilter();
  }
    /*
    if (
      name === '' &&
      comparison !== '' &&
      column !== '' &&
      value !== ''
    ) {
      return this.numericFilter();
    } */
  return allPlanets();
}

/* const mapStateToProps = (state) => ({
  data: state.data,
  name: state.filters.filterByName.name,
  filters: state.filters.filterByNumericValues,
}); */

// Para resolver o problema do codeclimate 'prop-type array is forbiden', utilizei a função InstanceOf que encontrei neste site: https://github.com/yannickcr/eslint-plugin-react/issues/2079

/* TableData.propTypes = {
  data: PropTypes.instanceOf(Array).isRequired,
  name: PropTypes.string.isRequired,
  filters: PropTypes.instanceOf(Array).isRequired,
  column: PropTypes.string,
  value: PropTypes.string,
  comparison: PropTypes.string,
}; */

/* export default connect(mapStateToProps)(TableData); */
