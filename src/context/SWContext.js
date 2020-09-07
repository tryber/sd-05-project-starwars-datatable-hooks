import { createContext } from 'react';

const DEFAULT_CONTEXT_VALUE = {
  planets: [],
  planetsColumns: [],
  isFetching: false,
  nextPage: '',
  previousPage: '',
  count: '',
  error: false,
}

const SWContext = createContext(DEFAULT_CONTEXT_VALUE);

export default SWContext;