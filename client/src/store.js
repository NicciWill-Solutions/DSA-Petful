import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { catReducer } from '../src/reducers/catReducer';
import { dogReducer } from '../src/reducers/dogReducer';

const rootReducer = combineReducers({
  catReducer,
  dogReducer
})

export default createStore(rootReducer,
composeWithDevTools(applyMiddleware(thunk))
);