// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import React, { Component } from 'react';
import Dropfilters from './Dropfilters';
// import FilterDisplay from './FilterDisplay';
// import { filterByName } from '../reducers/filters';

import React, { useContext } from 'react';
import { StarWarsContext } from '../context/starWarsContext';

const SearchBar = () => {

  const { setFilterByName } = useContext(StarWarsContext);
  //  const { handleChangeName } = this.props;
  return (
    <div>
      <label htmlFor="name-filter-input"> Search planet by name:
        <input
          data-testid="name-filter"
          type="text"
          onChange={ (event) => setFilterByName(event.target.value) }
        />
      </label>
      <Dropfilters />
    </div>
  )
}

// <FilterDisplay />
// {event => this.props.filterByName({ name: event.target.value })}

// const mapDispatchToProps = (dispatch) => ({
//   handleChangeName: (event) => dispatch(filterByName(event.target.value)),
// });

// export default connect(null, mapDispatchToProps)(SearchBar);

// SearchBar.propTypes = {
//   handleChangeName: PropTypes.func.isRequired,
// };
export default SearchBar;
