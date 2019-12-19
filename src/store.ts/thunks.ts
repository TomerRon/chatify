// tslint:disable no-expression-statement
import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { TRootState } from './'
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
    body: 'foobar',
    name: 'foobar'
  }
]

export const fetchStory = (): AppThunk => async dispatch => {
  dispatch(fetchStoryStart())
  setTimeout(() => {
    dispatch(fetchStorySuccess(MOCK_DATA))
  }, 3000)
}
