/* import requisicaoAPI from '../api/data';

const ACTIONS = {
  REQUEST_API,
  RECEIVE_API,
  FILTER_NAME,
  COMBINA_ACTIONS,
  REMOVE_FILTRO,
  ASC_DESC,
};

export default ACTIONS;

export const requestApi = () => ({
  type: REQUEST_API,
});

export const receiveApi = (planetas) => ({
  type: RECEIVE_API,
  payload: planetas,
});

export const filter = (nome) => ({
  type: FILTER_NAME,
  payload: nome,
});

export const combinaActions = ({ column, comparison, value }) => ({
  type: COMBINA_ACTIONS,
  column,
  comparison,
  value,
});

export const removeFiltro = (evento) => ({
  type: REMOVE_FILTRO,
  payload: evento.target.id,
});

export function ascDesc(sort, column) {
  return {
    type: ASC_DESC,
    sort,
    column,
  };
}

export function fetchAllPlanets() {
  return (dispatch) => {
    dispatch(requestApi());
    return requisicaoAPI().then((dados) => dispatch(receiveApi(dados)));
  };
}
 */