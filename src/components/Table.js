import TableHeader from './TableHeader';
// import { datafilterfunction } from './Dropfilters';

import React, { useEffect, useContext } from 'react';
import { StarWarsContext } from '../context/starWarsContext';
import TableBody from './TableBody';
// import FetchData from '../services/API';

const apiUrl = 'https://swapi-trybe.herokuapp.com/api/planets/';

function FetchData() {
  // const { setData } = useContext(StarWarsContext);
  return fetch(apiUrl)
    .then((response) => response.json())
    .then(
      (data) => data.results,
      (error) => { console.log(`erro: ${error.message}`) },
    );
};

const Table = () => {
  const { data, setData, name, filterByNumericValues } = useContext(StarWarsContext);

  useEffect(() => {
    FetchData().then((dataApi) => setData(dataApi));
  }, []);

  return (
    <div>
      {!data && <h2>Error fetching data!</h2>}
      <table>
        <TableHeader />
        {data && <TableBody />}
      </table>
    </div>
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
