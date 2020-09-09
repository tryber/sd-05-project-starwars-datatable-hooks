import React, { createContext } from 'react';
import apiPlanet from './apiPlanet';
import Table from './components/Table';
import InputName from './components/InputName';
import InputNumber from './components/InputNumber';

const ISSContext = createContext(); // Declarando o contexto numa variável. Retorna 2 obj.

const contextValue = { // valor que será passado para o Provider
  // Funciona como se fosse o INITIAL_STATE do Redux
  isFetching: true,
  batatinhaResults: [],
}

// render props
const ShowContext = () => (
  // Acessando o ISSContext pelo Consumer que está sendo passado no Provider
  <ISSContext.Consumer>
    {
      (context) => (<span>{`Context ${JSON.stringify(context)}`}</span>)
    }
  </ISSContext.Consumer>
)

function App() {
  return (
    // todo componente abaixo do Provider tem acesso ao contexto
    // temos que passar um valor para o Provider que vem do context
    <ISSContext.Provider value={contextValue}>
      <div className="App">
        <header className="App-header">
          <apiPlanet />
          <ShowContext />
          <InputName />
          <InputNumber />
          <Table />
        </header>
      </div>
    </ISSContext.Provider>
  );
}

export default App;