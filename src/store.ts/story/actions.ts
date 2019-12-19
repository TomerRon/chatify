import {
  FETCH_STORY_START,
  FETCH_STORY_SUCCESS,
  IMessage,
  NEXT_MESSAGE,
  PREV_MESSAGE,
  TStoryActionTypes
} from './types'

export const nextMessage = (): TStoryActionTypes => ({
  type: NEXT_MESSAGE
})

export const previousMessage = (): TStoryActionTypes => ({
  type: PREV_MESSAGE
})

export const fetchStoryStart = (): TStoryActionTypes => ({
  type: FETCH_STORY_START
})

export const fetchStorySuccess = (
  messages: readonly IMessage[]
): TStoryActionTypes => ({
  payload: messages,
  type: FETCH_STORY_SUCCESS
})
