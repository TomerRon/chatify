import { NEXT_MESSAGE, PREV_MESSAGE, TStoryActionTypes } from './types'

export const nextMessage = (): TStoryActionTypes => ({
  type: NEXT_MESSAGE
})

export const previousMessage = (): TStoryActionTypes => ({
  type: PREV_MESSAGE
})
