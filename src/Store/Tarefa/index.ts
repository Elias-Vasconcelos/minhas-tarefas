import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type Editor = {
  estaEditando: boolean
}

const initialState: Editor = {
  estaEditando: false
}

const EditorSlice = createSlice({
  name: 'editor',
  initialState,
  reducers: {
    editar: (state) => {
      state.estaEditando = !state.estaEditando
    }
  }
})

export const { editar } = EditorSlice.actions
export default EditorSlice.reducer
