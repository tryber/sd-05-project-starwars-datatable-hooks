// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import React, { Component } from 'react';
// import FilterDisplay from './FilterDisplay';
// import { filterByName } from '../reducers/filters';
import React, { useContext } from 'react';
import { StarWarsContext } from '../../context/starWarsContext';
import Dropfilters from './Dropfilters';

const SearchBar = () => {
  const { data, setFilterByName } = useContext(StarWarsContext);
  //  const { handleChangeName } = this.props;
  return (
    <div>
      {data.length !== 0 && (
      <label htmlFor="name-filter-input"> Search planet by name:
        <input
          data-testid="name-filter"
          type="text"
          name=""
          onChange={(event) => setFilterByName({ filterByName: { name: event.target.value } })}
        />
      </label>)
      }
      <Dropfilters />
    </div>
  );
};

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
