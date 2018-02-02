import * as actions from '../actions/cat';

const initialState = {
  catToAdopt: {},
  loading: false,
  error: null
};

export const catReducer = (state=initialState, action) => {
  if(action.type === actions.FETCH_CAT_REQUEST) {
    return Object.assign({}, state, {
      loading: true,
      error: null
    })
  }
  else if(action.type === actions.FETCH_CAT_SUCCESS) {
    return Object.assign({}, state, {
      loading: false,
      catToAdopt: action.catToAdopt,
      error: null
    })
  }
  else if(action.type === actions.FETCH_CAT_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    })
  }
  else {
    return state;
  }
};
