/* import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchApi } from '../action';
import THead from './THead';
import TBody from './TBody';
import SearchBar from './SearchBar'; */

import React, { useContext, useEffect } from 'react';
import SWContext from '../context/swContext';
import resolveApi from '../service/swAPI';
import THead from './THead';
import TBody from './TBody';
import SearchBar from './SearchBar';

function Table() {
  const { setData, isFetching, setIsFetching } = useContext(SWContext);

  useEffect(() => {
    resolveApi()
      .then(setData)
      .then(() => setIsFetching(false));
  }, []);

  if (isFetching) return <h1>LOADING</h1>;

  return (
    <div>
      <SearchBar />
      <table>
        <thead>
          <THead />
        </thead>
        <TBody />
      </table>
    </div>
  );
}

export default Table;

/* class Table extends Component {

    if (isFetching) return <h1>LOADING</h1>;
    return (
      <div>
        <SearchBar />
        <table>
          <thead>
            <THead />
          </thead>
          <TBody />
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isFetching: state.apiReducer.isFetching,
});

const mapDispatchToProps = (dispatch) => ({
  chamaApi: () => dispatch(fetchApi()),
}); */

//export default connect(mapStateToProps, mapDispatchToProps)(Table);
