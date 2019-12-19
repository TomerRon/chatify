import React, { useEffect, useRef } from 'react'
import { ScrollView, View } from 'react-native'
import { useDispatch } from 'react-redux'
import ChatRoot from '../components/chat/ChatRoot'
import Controls from '../components/controls/Controls'
import Spinner from '../components/Spinner'
import { useSelector } from '../store'
import { nextMessage, previousMessage } from '../store/story/actions'
import { fetchStory } from '../store/thunks'

const Story = () => {
  const story = useSelector(state => state.story)
  const dispatch = useDispatch()
  const scrollView = useRef(null)

  // Get a list of unique participants
  const participants: readonly string[] = [
    ...new Set(story.messages.map(message => message.name))
  ]

  // tslint:disable:no-expression-statement
  useEffect(() => {
    dispatch(fetchStory())
  }, [dispatch])

  useEffect(() => {
    if (scrollView.current) {
      scrollView.current.scrollToEnd()
    }
  }, [story.current])
  // tslint:enable:no-expression-statement

  const handleNextMessage = () => dispatch(nextMessage())
  const handlePreviousMessage = () => dispatch(previousMessage())

  return (
    <View style={{ flex: 1 }}>
      {story.loading ? (
        <Spinner />
      ) : (
        <Controls
          onNextMessage={handleNextMessage}
          onPreviousMessage={handlePreviousMessage}
        >
          <ScrollView ref={scrollView} style={{ flex: 1 }}>
            <ChatRoot
              messages={story.messages.slice(0, story.current)}
              participants={participants}
            />
          </ScrollView>
        </Controls>
      )}
    </View>
  )
}

export default Story
