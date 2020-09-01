import React from 'react';
// import SelectInputs from './selectinputs';

class SearchBar extends React.Component {
  render() {
    // const { getValue } = this.props;
    return (
      <form>
        <label htmlFor="searchbar">Procurar planeta</label>
        <input
          type="text"
          data-testid="name-filter"
          id="searchbar"
          // onChange={(event) => getValue(event.target.value)}
        />
        {/* <SelectInputs /> */}
      </form>
    );
  }
}


export default SearchBar;
