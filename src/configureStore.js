import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './redux/reducers'

const middleware = []

middleware.push(thunk)

export default function(initState) {
  return createStore(rootReducer, initState, applyMiddleware(...middleware))
}
