import {
  FETCH_STORY_START,
  FETCH_STORY_SUCCESS,
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
            ? state.current + 1
            : state.current
      }
    case PREV_MESSAGE:
      return {
        ...state,
        current: state.current > 1 ? state.current - 1 : state.current
      }
    case FETCH_STORY_START:
      return initialState
    case FETCH_STORY_SUCCESS:
      return {
        current: 1,
        loading: false,
        messages: action.payload
      }
    default:
      return state
  }
}
