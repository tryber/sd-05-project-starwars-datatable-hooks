import React, { useState, useEffect } from 'react';
import './App.css';
import StarwarsContext from './context/StarwarsContext';
import FetchPlanets from './services/Api';
import Filters from './components/Filters';
import Table from './components/Table';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [planetList, setPlanetList] = useState([]);
  const [filterByName, setFilterByName] = useState({ name: '' });
  const [numberFilters, setNumberFilters] = useState([]);
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);

  useEffect(() => {
    FetchPlanets()
      .then((res) => { setPlanetList(res); })
      .then(() => { setIsLoading(false); });
  }, []);

  const addFilterByNumericValues = (entries) => {
    setFilterByNumericValues([...filterByNumericValues, entries]);
  };

  const filters = {
    filterByName,
    setFilterByName,
    numberFilters,
    setNumberFilters,
    filterByNumericValues,
    addFilterByNumericValues,
    removeFilter: () => {},
  };

  const data = {
    isLoading,
    setIsLoading,
    filters,
    planetList,
    setPlanetList,
  };

  return (
    <StarwarsContext.Provider value={data}>
      <div className="App">
        <Filters />
        <Table />
      </div>
    </StarwarsContext.Provider>
  );
}

export default App;
