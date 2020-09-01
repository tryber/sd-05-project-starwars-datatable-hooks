import React from 'react';
import './App.css';
import { StarWarsProvider } from './context/StarWarsContext';
import Table from './components/Table';
import Form from './components/Form';
// import Select from './components/Select';
import Radio from './components/Radio';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <h1>Star Wars API</h1>
        <StarWarsProvider>
          <Form />
          <Radio />
          {/* <Select /> */}
          <Table />
        </StarWarsProvider>
      </div>
    );
  }
}

export default App;
