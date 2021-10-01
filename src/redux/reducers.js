import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import cart from './cart/reducers'
import products from './products/reducers'

const RootReducer = (history)=>
  combineReducers({
    router: connectRouter(history),
    cart,
    products,
  })

  export default RootReducer