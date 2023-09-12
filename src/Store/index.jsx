import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import activateReducer from './categories';
import productReducer from './Product'
import cart from './Cart';

let reducers = combineReducers({
  activateReducer: activateReducer,
  productReducer: productReducer,
  cart:cart
})

const store = () => {
    return createStore(reducers, composeWithDevTools())
}

export default store();

