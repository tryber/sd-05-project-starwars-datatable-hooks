import React, { useContext, useEffect } from 'react';
// import TableFirstLine from '../components/TableFirstLine';
// import TableInfo from '../components/TableInfo';
import StarWarsContext from '../context/StarWarsContext';
import planetAPI from '../services/requestAPI';

function Table() {
  console.log(useContext(StarWarsContext));
  const { setData } = useContext(StarWarsContext);

  useEffect(() => {
    planetAPI()
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <table>
        {/* <TableFirstLine />
        <TableInfo /> */}
      </table>
    </div>
  );
}
export default Table;
