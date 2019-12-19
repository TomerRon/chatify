// tslint:disable:no-expression-statement
import {
  fetchStoryStart,
  fetchStorySuccess,
  nextMessage,
  previousMessage
} from './actions'
import {
  FETCH_STORY_START,
  FETCH_STORY_SUCCESS,
  IMessage,
  NEXT_MESSAGE,
  PREV_MESSAGE
} from './types'

describe('Story actions', () => {
  it('should create NEXT_MESSAGE', () => {
    const expectedAction = {
      type: NEXT_MESSAGE
    }

    expect(nextMessage()).toStrictEqual(expectedAction)
  })

  it('should create PREV_MESSAGE', () => {
    const expectedAction = {
      type: PREV_MESSAGE
    }

    expect(previousMessage()).toStrictEqual(expectedAction)
  })

  it('should create FETCH_STORY_START', () => {
    const expectedAction = {
      type: FETCH_STORY_START
    }

    expect(fetchStoryStart()).toStrictEqual(expectedAction)
  })

  it('should create FETCH_STORY_SUCCESS', () => {
    const messages: readonly IMessage[] = [
      { body: 'foobar-body', name: 'foobar-name' }
    ]

    const expectedAction = {
      payload: messages,
      type: FETCH_STORY_SUCCESS
    }

    expect(fetchStorySuccess(messages)).toStrictEqual(expectedAction)
  })
})
