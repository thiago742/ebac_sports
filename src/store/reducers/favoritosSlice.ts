// src/store/favoritosSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

interface FavoritosState {
  favoritos: Produto[]
}

const initialState: FavoritosState = {
  favoritos: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    toggleFavorito: (state, action: PayloadAction<Produto>) => {
      const produtoExistente = state.favoritos.find(
        (p) => p.id === action.payload.id
      )
      if (produtoExistente) {
        state.favoritos = state.favoritos.filter(
          (p) => p.id !== action.payload.id
        )
      } else {
        state.favoritos.push(action.payload)
      }
    }
  }
})

export const { toggleFavorito } = favoritosSlice.actions
export default favoritosSlice.reducer
