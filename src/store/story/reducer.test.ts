// tslint:disable:no-expression-statement
import { storyReducer } from './reducer'
import {
  FETCH_STORY_START,
  FETCH_STORY_SUCCESS,
  IMessage,
  IStoryState,
  NEXT_MESSAGE,
  PREV_MESSAGE
} from './types'

const MOCK_STATE: IStoryState = {
  current: 2,
  loading: false,
  messages: [
    {
      body: 'foobar-body-1',
      name: 'foobar-name'
    },
    {
      body: 'foobar-body-2',
      name: 'foobar-name'
    },
    {
      body: 'foobar-body-3',
      name: 'foobar-name'
    }
  ]
}

describe('Story reducer', () => {
  it('should return the initial state', () => {
    expect(storyReducer(undefined, {} as any)).toStrictEqual({
      current: 0,
      loading: true,
      messages: []
    })
  })

  describe('NEXT_MESSAGE', () => {
    it('should increment current', () => {
      const expected = {
        ...MOCK_STATE,
        current: MOCK_STATE.current + 1
      }

      expect(
        storyReducer(MOCK_STATE, {
          type: NEXT_MESSAGE
        })
      ).toStrictEqual(expected)
    })

    it('should not increment if the current message is the last one', () => {
      const state = {
        ...MOCK_STATE,
        current: 3
      }

      expect(
        storyReducer(state, {
          type: NEXT_MESSAGE
        })
      ).toStrictEqual(state)
    })
  })

  describe('PREV_MESSAGE', () => {
    it('should decrement current', () => {
      const expected = {
        ...MOCK_STATE,
        current: MOCK_STATE.current - 1
      }

      expect(
        storyReducer(MOCK_STATE, {
          type: PREV_MESSAGE
        })
      ).toStrictEqual(expected)
    })

    it('should not decrement if the current message is the first one', () => {
      const state = {
        ...MOCK_STATE,
        current: 1
      }

      expect(
        storyReducer(state, {
          type: PREV_MESSAGE
        })
      ).toStrictEqual(state)
    })
  })

  it('should handle FETCH_STORY_START', () => {
    const expected = {
      current: 0,
      loading: true,
      messages: []
    }

    expect(
      storyReducer(MOCK_STATE, {
        type: FETCH_STORY_START
      })
    ).toStrictEqual(expected)
  })

  it('should handle FETCH_STORY_SUCCESS', () => {
    const messages: readonly IMessage[] = [
      { body: 'foobar-body', name: 'foobar-name' }
    ]
    const expected = {
      current: 1,
      loading: false,
      messages
    }
    expect(
      storyReducer(MOCK_STATE, {
        payload: messages,
        type: FETCH_STORY_SUCCESS
      })
    ).toStrictEqual(expected)
  })
})
