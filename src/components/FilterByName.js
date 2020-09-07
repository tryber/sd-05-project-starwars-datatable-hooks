import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
// import propTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { filterByName } from '../actions/index';

function FilterByName() {
  // const { isFetching, inputText } = this.props;
  const { setFilterText } = useContext(StarWarsContext);
  return (
    <div>
      {/* {!isFetching && ( */}
      <div>
        <h4>Procurar</h4>
        <input
          data-testid="name-filter"
          type="text"
          name=""
          onChange={(e) => setFilterText({ filterByName: { name: e.target.value } })}
          // onChange={(e) => setFilterText(e.target.value)}
        />
      </div>
      {/* )} */}
    </div>
  );
}

export default FilterByName;
