import React, { useContext } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';
// import { fetchPlanetsThunk } from '../actions';
import TableHeader from './TableHeader';
import TableData from './TableData';

// function Table() {

// }
class Table extends React.Component {

  componentDidMount() {
    const { async } = this.props;
    async();
  }

  render() {
    const { fetching } = this.props;
    return (
      <div>
        {fetching && <h5>Loading...</h5>}
        {!fetching && (
          <div>
            <table>
              <TableHeader />
              <TableData />
            </table>
          </div>
        )}
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({
//   fetching: state.planetReducer.fetching,
//   data: state.planetReducer.data,
// });

// const mapDispatchToProps = (dispatch) => ({
//   async: (data) => dispatch(fetchPlanetsThunk(data)),
// });

// Table.propTypes = {
//   fetching: propTypes.bool.isRequired,
//   async: propTypes.func.isRequired,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Table);
export default Table;
