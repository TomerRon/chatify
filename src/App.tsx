import { registerRootComponent } from 'expo'
import React from 'react'
import { SafeAreaView } from 'react-native'
import { Provider } from 'react-redux'
import Story from './pages/Story'
import { store } from './store'

const App: React.FC = () => (
  <Provider store={store}>
    <SafeAreaView style={{ flex: 1 }}>
      <Story />
    </SafeAreaView>
  </Provider>
)

export default registerRootComponent(App)
