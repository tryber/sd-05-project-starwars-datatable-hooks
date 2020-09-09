const APPLY_FILTER = 'UPDATEFILTER';
const REQUEST = 'REQUEST';
const REQUEST_SUCESS = 'REQUEST_SUCESS';
const REQUEST_FAIL = 'REQUEST_FAIL';
const FILTER_SELECTION = 'SELECTION';
const FILTER_REPLACEMENT = 'FILTER_REPLACEMENT';
const HEAD_DATA = 'HEAD_DATA';
const ORDENATION = 'ORDENATION';
const Actions = {
  APPLY_FILTER,
  REQUEST,
  REQUEST_SUCESS,
  REQUEST_FAIL,
  FILTER_SELECTION,
  FILTER_REPLACEMENT,
  HEAD_DATA,
  ORDENATION,
};

export function updateFilter(payload) {
  return {
    type: APPLY_FILTER,
    filter: payload,
  };
}

export function headerOrder(payload) {
  return {
    type: ORDENATION,
    payload,
  };
}

export function headerData(payload) {
  return {
    type: HEAD_DATA,
    payload,
  };
}

export function selectionFilter(payload) {
  return {
    type: FILTER_SELECTION,
    payload,
  };
}
export function replaceFilters(payload) {
  return {
    type: FILTER_REPLACEMENT,
    payload,
  };
}

export default Actions;
