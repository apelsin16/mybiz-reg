import { createStore, combineReducers } from 'redux';
import  tovReducer  from './reducers/tov';

const rootReducer = combineReducers({
    // tov: tovReducer,
    // fop: fopReducer,
    draft: tovReducer 
});

 /* eslint-disable no-underscore-dangle */
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */
export default store;
