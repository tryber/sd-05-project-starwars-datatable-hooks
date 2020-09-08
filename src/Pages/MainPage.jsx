import React, { useContext, useEffect } from 'react';
import Header from '../Components/Header';
import PlanetsTable from '../Components/PlanetsTable';
import { SWContext } from '../context';

function MainPage() {
  const { getPlanets } = useContext(SWContext);
  useEffect(() => getPlanets(), []);
  return (
    <div>
      <h1>Star Wars Project</h1>
      <Header />
      <PlanetsTable />
    </div>
  );
}

export default MainPage;
