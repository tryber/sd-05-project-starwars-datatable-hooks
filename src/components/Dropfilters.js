// import PropTypes from 'prop-types';
import React, { useState, useContext } from 'react';
import { StarWarsContext } from '../context/starWarsContext';
// import { connect } from 'react-redux';
// import { filterByNumericValues } from '../reducers/filters';

export function datafilterfunction(filteredPlanets, filterByNumericValues) {
  let planets = filteredPlanets;
  for (let i = 0; i < filterByNumericValues.length; i += 1) {
    if (filterByNumericValues[i].comparison === 'maior que') {
      planets = planets.filter((planet) =>
        Number(planet[filterByNumericValues[i].column]) > Number(filterByNumericValues[i].value));
    } else if (filterByNumericValues[i].comparison === 'menor que') {
      planets = planets.filter((planet) =>
        Number(planet[filterByNumericValues[i].column]) < Number(filterByNumericValues[i].value));
    } else if (filterByNumericValues[i].comparison === 'igual a') {
      planets = planets.filter((planet) =>
        Number(planet[filterByNumericValues[i].column]) === Number(filterByNumericValues[i].value));
    }
  }
  return planets;
}

const Dropfilters = () => {
  // this.state = {
  //     column: '',
  //     comparison: '',
  //     value: '',
  //   };
  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('');
  const [value, setValue] = useState('');

  // colChange(event) {
  //   setColumn(event.target.value);
  // }

  // compChange(event) {
  //   setComparison(event.target.value);
  // }

  // vChange(event) {
  //   setValue(event.target.value);
  // }

  const { filterByNumericValues, setfilterByNumericValues } = useContext(StarWarsContext);
  
  const columnOptions = () => {
    // const { numericValuesFilter } = this.props;
    const selectedFilterColumns = filterByNumericValues.map((filter) => filter.column);
    let columns = [
      'coluna',
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water'];
    columns = columns.filter((column) => !selectedFilterColumns.includes(column));
    return columns.map((column) => <option value={column} key={column}>{column}</option>);
  };

  //  const tsc = this.state.comparison;
  return (
    <form>
      <label htmlFor="column"> Selecione a coluna:
        <select data-testid="column-filter" value={column} onChange={(event) => setColumn(event.target.value)}>
          {columnOptions}
        </select>
      </label>
      <label htmlFor="comparison"> Selecione a comparação:
        <select data-testid="comparison-filter" value={comparison} onChange={(event) => setComparison(event.target.value)}>
          <option>selecione:</option>
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>
      <input type="number" data-testid="value-filter" onChange={(event) => setValue(event.target.value)} />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ setfilterByNumericValues({column, comparison, value}) }
      >Filtrar</button></form>
  )
}

// const mapStateToProps = (state) => ({
//   numericValuesFilter: state.filters.filterByNumericValues,
// });

// const mapDispatchToProps = (dispatch) => ({
//   handleSubmit: (values) => dispatch(filterByNumericValues(values)),
// });

export default Dropfilters;

// Dropfilters.propTypes = {
//   handleSubmit: PropTypes.func.isRequired,
//   numericValuesFilter: PropTypes.arrayOf(PropTypes.object).isRequired,
// };
