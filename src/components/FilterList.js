import React from 'react';
// import { cancelFilterAction } from '../actions';

class FilterList extends React.Component {

  render() {
    const { filterNumber, cancelFilter } = this.props;
    return (
      <div className="filters-list">
        <h4> Current filters: </h4>
        {filterNumber.map((filter, i) => (
          <p data-testid="filter" key={filter.column}>
            <span>
              <button className="red-button" onClick={() => cancelFilter(i)}>
                X
              </button>
              {`${filter.column} ${filter.comparison} ${filter.value}`}
            </span>
          </p>
        ))}
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({
//   filterNumber: state.filters.filterByNumericValues,
// });

// const mapDispatchToProps = (dispatch) => ({
//   cancelFilter: (index) => dispatch(cancelFilterAction(index)),
// });

// FilterList.propTypes = {
//   filterNumber: propTypes.arrayOf(propTypes.object).isRequired,
//   cancelFilter: propTypes.func.isRequired,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(FilterList);
export default FilterList;
