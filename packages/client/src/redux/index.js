export const createSetterActions = (namespace, propNames) =>
  propNames.map(propName => {
    const type = `${namespace}/SET_${propName}`;
    const action = value => ({ type, value });
    action.toString = () => type;
    return action;
  });

export const createAction = (type, thunk) => {
  const action = (...props) => dispatch => {
    dispatch({ type });
    dispatch(thunk(...props));
  };

  action.toString = () => type;

  return action;
};

export const createReducer = (initialState, handlers) => (
  state = initialState,
  { type, ...rest }
) => {
  if (handlers[type]) {
    return handlers[type](state, { ...rest });
  }

  return state;
};

export const createReducerSetter = propName => (state, { value }) => ({
  ...state,
  [propName]: value,
});

export const createSelectors = (namespace, propNames) =>
  propNames.map(propName => state => state[namespace][propName]);
