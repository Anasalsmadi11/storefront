import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import activateReducer from './categories';


let reducers = combineReducers({
  activateReducer: activateReducer
})

const store = () => {
    return createStore(reducers, composeWithDevTools())
}

export default store();

