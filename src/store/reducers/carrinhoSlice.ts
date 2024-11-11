import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

interface CarrinhoState {
  itens: Produto[]
}

const initialState: CarrinhoState = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionarAoCarrinho: (state, action: PayloadAction<Produto>) => {
      state.itens.push(action.payload)
    }
  }
})

export const { adicionarAoCarrinho } = carrinhoSlice.actions
export default carrinhoSlice.reducer
