import React, { useState, useContext } from 'react';
// import propTypes from 'prop-types';
// import { headerOrder } from '../Actions/actions';
import { Context } from '../Context/contextSW';

function OrderToMe() {
  const [orderBasico, setOrderBasico] = useState({
    column: 'name',
    sort: 'ASC',
  });
  const { header: columns, setOrder } = useContext(Context);
  // console.log(columns)
  return (
    <div>
      <select
        data-testid="column-sort"
        onChange={(e) => setOrderBasico({ ...orderBasico, column: e.target.value })}
      >
        {columns.map((e) => (
          <option key={e}>{e}</option>
        ))}
      </select>
      <div>
        <input
          data-testid="column-sort-input-asc"
          type="radio"
          name="ord"
          id="1"
          value="ASC"
          onClick={() => setOrderBasico({ ...orderBasico, sort: 'ASC' })}
        />
        <label htmlFor="1">ASC</label>
        <input
          data-testid="column-sort-input-desc"
          type="radio"
          name="ord"
          id="2"
          value="DESC"
          onClick={() => setOrderBasico({ ...orderBasico, sort: 'DSC' })}
        />
        <label htmlFor="2">DSC</label>
      </div>
      <button data-testid="column-sort-button" onClick={() => setOrder(orderBasico)}>
        Ordernar
      </button>
    </div>
  );
}
/* const mapStateToProps = (state) => ({
  columns: state.filters.header,
});
const mapDispatchToProps = (dispatch) => ({
  upOrder: (sel) => dispatch(headerOrder(sel)),
}); */
export default OrderToMe;

/* OrderToMe.propTypes = {
  upOrder: propTypes.func.isRequired,
  columns: propTypes.arrayOf(propTypes.string).isRequired,
};
 */
