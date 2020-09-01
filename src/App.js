import React from 'react';
import './App.css';
import StarWarsProvider from './provider/StarWarsProvider';
import Title from './components/Title';
import FilterName from './components/FilterName';
import FilterNumber from './components/FilterNumber';
// import FilterList from './components/FilterList';
import Table from './components/Table';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <StarWarsProvider>
        <header className="App-header">
          <Title />
        </header>
        <section className="App-filters" style={{ flex: 1, flexDirection: 'row' }}>
          <FilterName />
          <FilterNumber />
          {/* <FilterList /> */}
        </section>
        <section className="App-section">
          <Table />
        </section>
        <section className="planet-image" />
        <footer className="App-footer">
          <Footer />
        </footer>
      </StarWarsProvider>
    </div>
  );
}

export default App;
