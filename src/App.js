import React from 'react';
import './App.css';
import Table from './component/Table';
import Provider from './context/Provider';
import TextForm from './component/TextForm';
import SelectForm from './component/SelectForm';

/* Projeto feito em tri-programming com Rodrigão e André.
Fontes consultadas: https://reactjs.org/docs/hooks-state.html
https://blog.rocketseat.com.br/react-hooks/
https://course.betrybe.com/front-end/react/context-api
https://dev.to/nazmifeeroz/using-usecontext-and-usestate-hooks-as-a-store-mnm */

function App() {
  return (
    <Provider>
      <h1>STARWARS PLANETS</h1>
      <TextForm />
      <SelectForm />
      <Table />
    </Provider>
  );
}

export default App;
