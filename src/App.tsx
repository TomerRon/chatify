import { registerRootComponent } from 'expo'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Provider } from 'react-redux'
import { store } from './store.ts'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center'
  }
})

const App: React.FC = () => (
  <Provider store={store}>
    <View style={styles.container}>
      <Text>App works.</Text>
    </View>
  </Provider>
)

export default registerRootComponent(App)
