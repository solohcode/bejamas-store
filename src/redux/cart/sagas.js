import { all, takeEvery, put } from 'redux-saga/effects'
import actions from './actions'
import { message } from 'antd'

export function* ADD_TO_CART({ payload }) {

  // let dv = false

  yield put({
    type: 'cart/SET_STATE',
    payload: {
      cartLoading: true,
      // cartVisible: true
    },
  })

  const {e,cart} = payload

    const cartItems = cart.slice();
    let alreadyExists = false;
    cartItems.forEach((x) => {
      if (x.id === e.id) {
        alreadyExists = true;
        x.count++;
      }
    });
    if (!alreadyExists) {
      cartItems.push({ ...e, count: 1 });
    }
    yield put({
      type: 'cart/SET_STATE',
      payload: {
        cart: cartItems,
        loading: false,
        // cartVisible: true
      },
    }) 

    // if there is a product passed and it doesn't exist in the cart 
    e?  
    !alreadyExists?
        message.success({
            content: `${e.name} added to cart successfully`,
            style:{
                marginTop: '10vh'
            }
        }):
        message.warning({
          content: `${e.name} already in the cart`,
            style:{
                marginTop: '10vh'
            }
        }):
        message.error({
          content: `${e.name} failed to add to cart`,
          style:{
            marginTop: '10vh'
        }
        })
  }
  
  export function* CLEAR_CART() {

    yield put({
      type: 'cart/SET_STATE',
      payload: {
        cart: [],
        loading: false
      },
    })
    message.success({
      content: `cart cleared`,
      style:{
          marginTop: '10vh'
      }
  })
  }






export default function* rootSaga() {
  yield all([
    takeEvery(actions.ADD_TO_CART, ADD_TO_CART ),
    takeEvery(actions.CLEAR_CART, CLEAR_CART ),
  ])
}


