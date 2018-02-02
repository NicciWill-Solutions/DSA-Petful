import * as actions from '../actions/dog';

const initialState = {
  dogToAdopt: {},
  loading: false,
  error: null
};

export const dogReducer = (state=initialState, action) => {
  if(action.type === actions.FETCH_DOG_REQUEST) {
    return Object.assign({}, state, {
      loading: true,
      error: null
    })
  }
  else if(action.type === actions.FETCH_DOG_SUCCESS) {
    return Object.assign({}, state, {
      loading: false,
      dogToAdopt: action.dogToAdopt,
      error: null
    })
  }
  else if(action.type === actions.FETCH_DOG_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    })
  }
  else {
    return state;
  }
};
