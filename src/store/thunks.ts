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

export const fetchStory = (): AppThunk => async dispatch => {
  dispatch(fetchStoryStart())

  const response = await fetch(
    'http://www.mocky.io/v2/5dfbd68b2f00005700ffa216'
  )
  const { messages } = await response.json()

  dispatch(fetchStorySuccess(messages))
}
