import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { IMessage } from '../../store/story/types'

interface IProps {
  readonly isSelf: boolean
  readonly message: IMessage
}

const styles = StyleSheet.create({
  bubble: {
    borderRadius: 10,
    marginBottom: 10,
    marginHorizontal: 10,
    maxWidth: '60%',
    padding: 10
  },
  bubbleOther: {
    backgroundColor: '#e4e4e8'
  },
  bubbleSelf: {
    backgroundColor: '#4b7eef'
  },
  name: {
    fontWeight: 'bold',
    marginBottom: 5
  },
  textSelf: {
    color: '#eee'
  }
})

const ChatBubble: React.FC<IProps> = ({ isSelf, message }) => {
  const textStyle = isSelf ? styles.textSelf : {}

  return (
    <View
      style={{
        alignItems: isSelf ? 'flex-end' : 'flex-start'
      }}
    >
      <View
        style={{
          ...styles.bubble,
          ...(isSelf ? styles.bubbleSelf : styles.bubbleOther)
        }}
      >
        <Text style={{ ...textStyle, ...styles.name }}>{message.name}</Text>
        <Text style={textStyle}>{message.body}</Text>
      </View>
    </View>
  )
}

export default ChatBubble
