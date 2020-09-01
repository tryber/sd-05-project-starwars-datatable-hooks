import React, { useContext, useState  } from 'react';
import { StarWarsContext } from '../../context/StarWarsContext';


const Radio = () => {

    const options = [
        'name',
        'rotation_period',
        'orbital_period',
        'diameter',
        'climate',
        'gravity',
        'terrain',
        'surface_water',
        'population',
        'films',
        'created',
        'edited',
        'url',
      ];

      const [order, setOrders] = useState({
        columnValue:'',
        radio: '',
      })

      console.log(order);
      const { setOrder } = useContext(StarWarsContext);
  return (
    <div>
      <div>
        <select
          name="columnValue" onChange={(e) => setOrders({...order, columnValue: e.target.value })} id="order" data-testid="column-sort"
        >
          { options.map((item) => (
            <option key={item}>{item}</option>
          ))};
        </select>
      </div>
      <input
        type="radio" onClick={(e) => setOrders({...order, radio: e.target.value })} data-testid="column-sort-input"
        name="radio" id="ASC" value="ASC"
      />
      <label htmlFor="ASC">ASC</label>
      <input
        type="radio" onClick={(e) => setOrders({...order, radio: e.target.value })} data-testid="column-sort-input"
        name="radio" id="DESC" value="DESC"
      />
      <label htmlFor="DESC">DESC</label>
      <button
        type="button" onClick={() => setOrder({order})}
        data-testid="column-sort-button"
      >
        Filtrar
      </button>
    </div>
  );
}


export default Radio;
