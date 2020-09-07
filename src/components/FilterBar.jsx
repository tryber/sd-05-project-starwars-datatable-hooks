import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import SelectColumn from './SelectColumn';
import SelectOrder from './SelectOrder';
import SelectComparison from './SelectComparison';
import Button from './Button';
import RadioSort from './RadioSort';
import SelectValue from './SelectValue';
import ExcludeFilter from './buttonExcludeFilter';
import StarWarsContext from '../context/StarWarsContext';

const InputProcurar = (props) => (
  <div>
    <label htmlFor="filterByName">Procurar</label>
    <input
      data-testid="name-filter"
      name="filterByName"
      type="text"
      // value={name}
      onChange={({target}) => props.callback(target.value)}
    />
  </div>
);

function FilterBar() {
  const { setFilterByName, filterByNumericValues } = useContext(StarWarsContext);
 // const [name, setName] = useState('');
  
  const handleChange = (change) => {
    // setName(change);
    setFilterByName({ name: change });
  }
  
  //  console.log(filterByName, name);
  
    return (
      <div>
        <p>StarWars Datatable with Filters</p>
        <form className="head">
          <InputProcurar callback={handleChange} />
          <SelectOrder />
          <RadioSort />
          <Button data="column-sort-button" />
          <SelectColumn />
          <SelectComparison />
          <SelectValue />
          <Button data="button-filter" />
          {(filterByNumericValues.length > 0) ? <ExcludeFilter /> : false}
        </form>
      </div>
    );
  }

// const mapStateToProps = (state) => ({
//   filterSetUp: state.filters.filterByNumericValues,
// });

// const mapDispatchToProps = (dispatch) => ({
//   filter: (str) => dispatch(filterByName(str)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(FilterBar);

export default FilterBar;

FilterBar.propTypes = {
  filter: PropTypes.func.isRequired,
  // isFetching: PropTypes.bool.isRequired,
};
