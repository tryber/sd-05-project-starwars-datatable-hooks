import React, { useState, useContext } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { changeFilterByName, changeFilterByNumeric } from './actions/actionsFilter';

export default function SearchBar() {
  const [inputText, setInputText] = useState('');
  /* const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('');
  const [value, setValue] = useState(''); */

  const { changeFilterByName } = useContext(StarWarsContext);
    /* this.state = {
      inputText: '',
      column: '',
      comparison: '',
      value: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSelectColumn = this.handleSelectColumn.bind(this);
    this.handleSelectComparison = this.handleSelectComparison.bind(this);
    this.handleNumericValue = this.handleNumericValue.bind(this);
    this.submitToStore = this.submitToStore.bind(this);
    this.selectParameter = this.selectParameter.bind(this);
  } */

  /* function selectParameter() {
    return (
      <select
        data-testid="column-filter"
        onChange={this.handleSelectColumn}
      >
        <option>select</option>
        <option value="population" id="population">population</option>
        <option value="orbital_period"id="orbital_period">orbital_period</option>
        <option value="diameter" id="diameter">diameter</option>
        <option value="rotation_period" id="rotation_period">rotation_period</option>
        <option value="surface_water" id="surface_water">surface_water</option>
      </select>
    );
  }

  function filterForm() {
    const { value } = this.state;
    return (
      <div>
        {this.selectParameter()}
        <select data-testid="comparison-filter" onChange={this.handleSelectComparison}>
          <option>select</option>
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <input
          type="number"
          data-testid="value-filter"
          value={value}
          onChange={this.handleNumericValue}
        />
        <button
          type="button"
          data-testid="button-filter"
          onClick={this.submitToStore}
        >
          Acionar Filtro
        </button>
      </div>
    );
  } */

  /* function handleSelectColumn(event) {
    this.setState({
      column: event.target.value,
    });
  }

  function handleSelectComparison(event) {
    this.setState({
      comparison: event.target.value,
    });
  } */

  function handleChange(event) {
    setInputText(event.target.value);
    return changeFilterByName(event.target.value);
  }

  /* function handleNumericValue(event) {
    this.setState({ value: event.target.value });
  } */

  /* submitToStore() {
    const { column, comparison, value } = this.state;
     this.props.changeFilterByNumeric(column, comparison, value);
  } */
    /* const { inputText } = this.state; */
  return (
    <div>
      <form>
        <label htmlFor="name-filter">Procurar</label>
        <input
          placeholder="Name"
          onChange={handleChange}
          value={inputText}
          data-testid="name-filter"
        />
      </form>
      {/* {this.filterForm()} */}
    </div>
  );
}

/* const mapStateToProps = (state) => ({
  filters: state.filters.filterByNumericValues,
});

const mapDispatchToProps = (dispatch) => ({
  changeFilterByName: (nameInput) => dispatch(changeFilterByName(nameInput)),
  changeFilterByNumeric: (column, comparison, value) => (
    dispatch(changeFilterByNumeric(column, comparison, value))
  ),
}); */

/* SearchBar.propTypes = {
  changeFilterByName: PropTypes.instanceOf(Object).isRequired,
  changeFilterByNumeric: PropTypes.instanceOf(Object).isRequired,
}; */

/* export default connect(mapStateToProps, mapDispatchToProps)(SearchBar); */
