import {
  TypedUseSelectorHook,
  useSelector as useSelectorUntyped
} from 'react-redux'
import { combineReducers, createStore } from 'redux'
import { storyReducer } from './story/reducer'

const rootReducer = combineReducers({ story: storyReducer })

export type TRootState = ReturnType<typeof rootReducer>

export const useSelector: TypedUseSelectorHook<TRootState> = useSelectorUntyped

export const store = createStore(rootReducer)
