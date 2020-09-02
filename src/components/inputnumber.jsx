import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function InputNumber() {
  const { setNumb } = useContext(StarWarsContext);
  return (
    <div>
      <input
        type="number"
        name="va"
        data-testid="value-filter"
        onChange={(e) => setNumb(e.target.value)}
      />
    </div>
  );
}
export default InputNumber;
