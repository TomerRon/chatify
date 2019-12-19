import React from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center'
  }
})

const Spinner = () => (
  <View style={styles.container}>
    <ActivityIndicator />
    <Text style={{ marginTop: 5 }}>Loading...</Text>
  </View>
)

export default Spinner
