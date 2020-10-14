import React, { useContext } from 'react';
import SWContext from '../context/swContext';

function THead() {
  const { data } = useContext(SWContext);

  return (
    <tr>
      {Object.keys(data[0]).map((cabecalho) =>
        cabecalho === 'residents' ? false : <th key={cabecalho}>{cabecalho}</th>,
      )}
    </tr>
  );
}

export default THead;
