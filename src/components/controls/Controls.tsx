import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const styles = StyleSheet.create({
  container: {
    bottom: 0,
    display: 'flex',
    flex: 1,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0
  },
  content: {
    borderBottomWidth: 1,
    borderColor: '#eee',
    borderTopWidth: 1,
    flex: 6
  },
  hint: {
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center'
  },
  input: {
    backgroundColor: '#fafafa',
    flex: 1
  }
})

interface IProps {
  readonly onNextMessage: () => void
  readonly onPreviousMessage: () => void
}

const Controls: React.FC<IProps> = ({
  children,
  onNextMessage,
  onPreviousMessage
}) => (
  <>
    <TouchableOpacity onPress={onPreviousMessage} style={styles.input}>
      <View style={styles.hint}>
        <Text>Tap to go back</Text>
      </View>
    </TouchableOpacity>
    <View style={styles.content}>{children}</View>
    <TouchableOpacity onPress={onNextMessage} style={styles.input}>
      <View style={styles.hint}>
        <Text>Tap to continue</Text>
      </View>
    </TouchableOpacity>
  </>
)

export default Controls
