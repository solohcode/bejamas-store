/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { all, takeEvery, put, call } from 'redux-saga/effects'
import actions from './actions'

//  store import 
import store from 'store'
// firebase import 
import { Get_Products } from '../../firebaseData'

// api calls here 

// export function* GET_PRODUCTS({ payload }) {
//   const { email, password } = payload
//   yield put({
//     type: 'user/SET_STATE',
//     payload: {
//       loading: true,
//     },
//   })
//   // const { authProvider: autProviderName } = yield select(state => state.settings)
//   const success = yield call('api call here')
//   if (success.status) {
//     notification.success({
//       message: 'Logged In',
//       description: success.message,
//     })
//   }
//   if (!success.status) {
//     yield put({
//       type: 'user/SET_STATE',
//       payload: {
//         loading: false,
//       },
//     })
//     notification.warning({
//       message: 'Logged In error',
//       description: success.message,
//     })
//   }
// }




export function* FILTER_PRODUCT({payload}){

  yield put({
    type: 'products/SET_STATE',
    payload: {
      filtered: payload,
    },
  })
}


export function* GET_PRODUCTS(){

  yield put({
    type: 'products/SET_STATE',
    payload: {
      loading: true,
    },
  })
  const success = yield call( Get_Products)
  if (success) {
    yield put({
      type: 'products/SET_STATE',
      payload: {
        loading: false,
        products: success,
        filtered:success
      },
    })
    }
    if (!success) {
      yield put({
        type: 'products/SET_STATE',
        payload: {
          loading: false,
        },
      })
    }
}





export default function* rootSaga() {
  yield all([
    takeEvery(actions.GET_PRODUCTS, GET_PRODUCTS ),
    takeEvery(actions.FILTER_PRODUCT, FILTER_PRODUCT ),
  ])
}
