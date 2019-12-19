export interface IMessage {
  readonly name: string
  readonly body: string
}

export interface IStoryState {
  readonly current: number
  readonly loading: boolean
  readonly messages: readonly IMessage[]
}

export const NEXT_MESSAGE = 'NEXT_MESSAGE'
export const PREV_MESSAGE = 'PREV_MESSAGE'

interface INextMessageAction {
  readonly type: typeof NEXT_MESSAGE
}

interface IPrevMessageAction {
  readonly type: typeof PREV_MESSAGE
}

export const FETCH_STORY_START = 'FETCH_STORY_START'
export const FETCH_STORY_SUCCESS = 'FETCH_STORY_SUCCESS'

interface IFetchStoryStartAction {
  readonly type: typeof FETCH_STORY_START
}

interface IFetchStorySuccessAction {
  readonly type: typeof FETCH_STORY_SUCCESS
  readonly payload: readonly IMessage[]
}

export type TStoryActionTypes =
  | INextMessageAction
  | IPrevMessageAction
  | IFetchStoryStartAction
  | IFetchStorySuccessAction
