import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import activateReducer from './categories'; // this is the reducer function 


let reducers = combineReducers({
  activateReducer: activateReducer
})

const store = () => {
    return createStore(reducers, composeWithDevTools())
}

export default store();

