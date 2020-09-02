import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import starWarsAPI from '../services/starWarsAPI';
import StarWarsContext from './StarWarsContext';

const StarWarsProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [filterParameter, setFilterParameter] = useState({ name: '' });
  const [filterNumeric, setFilterNumeric] = useState([]);
  const [filterSortedColumn, setFilterSortedColumn] = useState({ column: 'Name' });
  const [filterSortedOrder, setFilterSortedOrder] = useState({ sort: 'ASC' });

  useEffect(() => {
    setIsFetching(true);
    starWarsAPI().then((climaterules) => {
      setData(climaterules.results);
      setIsFetching(false);
    });
  }, []);

  const context = {
    data,
    isFetching,
    filterParameter,
    filterNumeric,
    filterSortedColumn,
    filterSortedOrder,
    setFilterParameter,
    setFilterNumeric,
    setFilterSortedColumn,
    setFilterSortedOrder,
  };

  return (
    <StarWarsContext.Provider value={context}>
      {children}
    </StarWarsContext.Provider>
  );
};

export default StarWarsProvider;

StarWarsProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
};
