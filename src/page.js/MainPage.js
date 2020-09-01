import React, { useEffect, useContext } from 'react';
import SearchBar from '../components/SearchBar';
import Table from '../components/Table';
import OrderTable from '../components/OrderTable';
import getStarWarsPlanets from '../services/starWarsAPI';
import StarWarsContext from '../context/StarWarsContext';

function MainPage() {
  const { setIsFetching, setData } = useContext(StarWarsContext);
  const getTableData = async (response) => {
    setIsFetching(true);
    await setData([...response.results]);
    setIsFetching(false);
  };

  useEffect(() => {
    getStarWarsPlanets().then(getTableData);
  }, []);

  return (
    <div>
      <SearchBar />
      <OrderTable />
      <Table />
    </div>
  );
}

export default MainPage;
