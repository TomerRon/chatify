import {
  IStoryState,
  NEXT_MESSAGE,
  PREV_MESSAGE,
  TStoryActionTypes
} from './types'

const initialState: IStoryState = {
  current: 0,
  loading: true,
  messages: []
}

export function storyReducer(
  state = initialState,
  action: TStoryActionTypes
): IStoryState {
  switch (action.type) {
    case NEXT_MESSAGE:
      return {
        ...state,
        current:
          state.current < state.messages.length
            ? (state.current || 0) + 1
            : state.current
      }
    case PREV_MESSAGE:
      return {
        ...state,
        current: state.current > 1 ? state.current - 1 : state.current
      }
    default:
      return state
  }
}
