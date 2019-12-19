import { registerRootComponent } from 'expo'
import React from 'react'
import { Provider } from 'react-redux'
import Story from './pages/Story'
import { store } from './store'

const App: React.FC = () => (
  <Provider store={store}>
    <Story />
  </Provider>
)

export default registerRootComponent(App)
