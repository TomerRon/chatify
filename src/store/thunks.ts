// tslint:disable no-expression-statement
import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { TRootState } from '.'
import { fetchStoryStart, fetchStorySuccess } from './story/actions'
import { IMessage } from './story/types'

type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  TRootState,
  null,
  Action<string>
>

const MOCK_DATA: readonly IMessage[] = [
  {
    body: 'Hi, I am Jim',
    name: 'Jim'
  },
  {
    body: 'Hello, I am Dwight',
    name: 'Dwight'
  },
  {
    body:
      'This is a really really really really long message, what do you think about that?',
    name: 'Jim'
  },
  {
    body:
      'This is another really really really really long message, what do you think about that?',
    name: 'Jim'
  },
  {
    body:
      'This is another really really really really long message, what do you think about that?',
    name: 'Jim'
  },
  {
    body: "Wow, that's a mouthful",
    name: 'Dwight'
  }
]

export const fetchStory = (): AppThunk => async dispatch => {
  dispatch(fetchStoryStart())
  setTimeout(() => {
    dispatch(fetchStorySuccess(MOCK_DATA))
  }, 3000)
}
