import React from 'react'
import { Provider } from 'react-redux'

import configureStore from '../configureStore'
import AsyncApp from './AsyncApp'
import DevTools from '../containers/DevTools'

const store = configureStore()

export default function Root() {
  return (
    <Provider store={store}>
      <AsyncApp />
      <DevTools />
    </Provider>
  )
}
