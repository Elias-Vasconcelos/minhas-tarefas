import { configureStore } from '@reduxjs/toolkit'
import EditorSlice from './Tarefa'

export const store = configureStore({
  reducer: {
    Editor: EditorSlice
  }
})

export default store
export type rootReducer = ReturnType<typeof store.getState>
