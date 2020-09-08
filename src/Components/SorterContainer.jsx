import React, { useContext, useState } from 'react';
import ColumnSelect from './ColumnSelect';
import SetSortButon from './SetSortButon';
import SortingType from './SortingType';
import { SWContext } from '../context';
import './SorterContainer.css';

const SorterContainer = () => {
  const { sendOrder } = useContext(SWContext);
  const [sortState, setSortState] = useState({
    column: 'Name',
    sort: 'ASC',
  });

  function changeState({ target: { name, value } }) {
    setSortState((state) => ({
      ...state,
      [name]: value,
    }));
  }

  return (
    <div className="sorter-container">
      <span className="sorter-container-header">Pondo Ordem</span>
      <ColumnSelect change={changeState} />
      <SortingType change={changeState} />
      <SetSortButon handleClick={() => sendOrder(sortState)} />
    </div>
  );
};

export default SorterContainer;
