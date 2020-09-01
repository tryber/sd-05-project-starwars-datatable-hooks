// import propTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { handleGoFetch } from '../reducers';
import HeaderTable from './HeaderTable';
import { datafilterfunction } from './Dropfilters';

import React, { useEffect, useContext } from 'react';
import { StarWarsContext } from '../context/starWarsContext';
import FetchData from '../../src/services/API';

const Table = () => {

  const { isfetching, data, name, filterByNumericValues } = useContext(StarWarsContext);
  
  // componentDidMount() {
  //   const { handleFetch } = this.props;
  //   handleFetch(); //FetchData
  // }
  useEffect(() => {
    FetchData()
  },[])

  const NameFilteredPlanets = data.filter((planets) => planets.name.includes(name));
  
  return (
    // const { isfetching, data, filterByName, filterByNumericValues } = this.props;
    // return (
      <div>
        {isfetching && <h1>Loading...</h1>}
        {!data && <h2>Error fetching data!</h2>}
        <table><HeaderTable />
          {!isfetching &&
          ((filterByNumericValues) ?
            (datafilterfunction(NameFilteredPlanets, filterByNumericValues)) : NameFilteredPlanets)
          .map((planet) => (
            <tbody key={planet.name}><tr>
              <td >{planet.name}</td>
              <td>{planet.rotation_period}</td>
              <td>{planet.orbital_period}</td>
              <td>{planet.diameter}</td>
              <td>{planet.climate}</td>
              <td>{planet.gravity}</td>
              <td>{planet.terrain}</td>
              <td>{planet.surface_water}</td>
              <td>{planet.population}</td>
              <td>{planet.films}</td>
              <td>{planet.created}</td>
              <td>{planet.edited}</td>
              <td>{planet.url}</td>
            </tr></tbody>
          ))}
        </table></div>
  );
}

// const mapDispatchToProps = (dispatch) => ({
//   handleFetch: (e) => dispatch(handleGoFetch(e)),
// });

// const mapStateToProps = (state) => ({
//   isfetching: state.fetchReducer.isfetching,
//   data: state.fetchReducer.data,
//   filterByName: state.filters.filterByName.name,
//   filterByNumericValues: state.filters.filterByNumericValues,
// });

export default Table;

// Table.propTypes = {
//   isfetching: propTypes.bool.isRequired,
//   data: propTypes.arrayOf(propTypes.object).isRequired,
//   handleFetch: propTypes.func.isRequired,
//   filterByName: propTypes.string.isRequired,
//   filterByNumericValues: propTypes.arrayOf(propTypes.object).isRequired,
// };
