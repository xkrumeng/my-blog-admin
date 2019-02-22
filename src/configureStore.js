import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './redux/reducers'
import DevTools from './containers/DevTools'

const middleware = []

middleware.push(thunk)

const enhancer = compose(
  applyMiddleware(...middleware),
  DevTools.instrument()
)

export default function(initState) {
  const store = createStore(rootReducer, initState, enhancer)

  if (module.hot) {
    module.hot.accept('./redux/reducers', () => {
      store.replaceReducer(require('./redux/reducers'))
    })
  }
  return store
}
