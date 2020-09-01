import React from 'react';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import SWContext from '../../context/SWContext';

const Input = ({ children, id }) => {
  const { setSortValue } = useContext(SWContext);
  return (
    <input
      data-testid={id}
      onClick={() => setSortValue(children)}
      name="sort"
      id={children}
      type="radio"
      value={children}
    />
  );
};
export default Input;

Input.propTypes = {
  children: PropTypes.string.isRequired,
};
