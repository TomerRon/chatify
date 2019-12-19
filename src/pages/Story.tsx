import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native'
import { useDispatch } from 'react-redux'
import Spinner from '../components/Spinner'
import { useSelector } from '../store'
import { nextMessage, previousMessage } from '../store/story/actions'
import { fetchStory } from '../store/thunks'

const Story = () => {
  const story = useSelector(state => state.story)
  const dispatch = useDispatch()

  // tslint:disable:no-expression-statement
  useEffect(() => {
    dispatch(fetchStory())
  }, [dispatch])
  // tslint:enable:no-expression-statement

  const handleNextMessage = () => dispatch(nextMessage())
  const handlePreviousMessage = () => dispatch(previousMessage())

  return (
    <View style={{ flex: 1 }}>
      {story.loading ? (
        <Spinner />
      ) : (
        <>
          <Button title="Previous" onPress={handlePreviousMessage} />
          <Button title="Next" onPress={handleNextMessage} />
          {story.messages.slice(0, story.current).map((message, i) => (
            <Text key={i}>
              {message.name}: {message.body}
            </Text>
          ))}
        </>
      )}
    </View>
  )
}

export default Story
