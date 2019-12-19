// tslint:disable:no-expression-statement
import { nextMessage, previousMessage } from './actions'
import { NEXT_MESSAGE, PREV_MESSAGE } from './types'

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
})
