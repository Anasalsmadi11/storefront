import { combineReducers, createStore,applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import activateReducer from './categories';
import dataFromApi from './Product'
import cart from './Cart';
import thunk from 'redux-thunk';

let reducers = combineReducers({
  activateReducer: activateReducer,
 dataFromApi : dataFromApi,
  cart:cart
})

const store = () => {
    // return createStore(reducers, composeWithDevTools())
        return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

}

export default store();

