import React from 'react';
import Table from './components/Table';
import { Provider } from './context/StarWarsContext';
import Procurar from './components/Procurar';
// import Seletores from './components/Seletores';
// import SelecionarFaixaValor from './components/SelecionarFaixaValor';
// import FiltrarNumeros from './components/FiltrarNumeros';
// import BotaoFiltrar from './components/BotaoFiltrar';
// import IconeX from './components/IconeX';
// import OrdenarTabela from './components/OrdenarTabela';
// <Seletores />
// <SelecionarFaixaValor />
// <FiltrarNumeros />
// <BotaoFiltrar />
// <IconeX />
// <OrdenarTabela />

function App() {
  return (
    <Provider>
      <header className="App-header">
        <Procurar />
      </header>
      <Table />
    </Provider>
  );
}

export default App;
