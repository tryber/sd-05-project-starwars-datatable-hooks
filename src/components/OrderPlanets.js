// import React, { useContext, useState } from 'react';
// import StarWarsContext from '../context/StarWarsContext';
// // import { connect } from 'react-redux';
// // import proptypes from 'prop-types';
// // import { sortFilter } from '../actions';

// // Referência: ajuda Anderson Godoy e Felipe Vieira

// const dropdownSel = [
//   'selecione',
//   'population',
//   'orbital_period',
//   'diameter',
//   'rotation_period',
//   'surface_water',
// ];

// function OrderPlanets() {
//   const [column, setColumn] = useState('');
//   const [sort, setSort] = useState('');
//   const { setOrder } = useContext(StarWarsContext);

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     if (name === 'column') {
//       setColumn(value);
//     } else {
//       setSort(value);
//     }
//   };

//   const handleClick = () => {
//     setOrder({ column, sort });
//   };
  
//   // const { ordFilt } = this.props;
//   return (
//     <div>
//       <select data-testid="column-sort" onChange={handleChange}>
//         {dropdownSel.map((option) => <option value={option} key={option}>{option}</option>)}
//       </select>
//       <label htmlFor="ASC">ASC</label>
//       <input
//         name="ordenar"
//         value="ASC"
//         type="radio"
//         data-testid="column-sort-input"
//         onClick={handleClick}
//       />
//       <label htmlFor="DESC">DESC</label>
//       <input
//         name="ordenar"
//         value="DESC"
//         type="radio"
//         data-testid="column-sort-input"
//         onClick={handleClick}
//       />
//       <button type="button" data-testid="column-sort-button" onClick={handleClick}>
//         Filtrar
//       </button>
//     </div>
//   );
// }

// export default OrderPlanets;
