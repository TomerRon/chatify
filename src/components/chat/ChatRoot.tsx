import React from 'react'
import { View } from 'react-native'
import { IMessage } from '../../store/story/types'
import ChatBubble from './ChatBubble'

interface IProps {
  readonly messages: readonly IMessage[]
  readonly participants: readonly string[]
}

const style = { paddingVertical: 20 }

const ChatRoot: React.FC<IProps> = ({ messages, participants }) => (
  <View style={style}>
    {messages.map((message, i) => (
      <ChatBubble
        key={i}
        // For the sake of simplicity, we just assume the second participant is self / "blue bubble"
        isSelf={message.name === participants[1]}
        message={message}
      />
    ))}
  </View>
)

export default ChatRoot
