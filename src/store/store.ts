import { configureStore } from '@reduxjs/toolkit'
import produtosApi from '../services/produtosApi'
import favoritosReducer from './reducers/favoritosSlice'
import carrinhoReducer from './reducers/carrinhoSlice'

export const store = configureStore({
  reducer: {
    [produtosApi.reducerPath]: produtosApi.reducer,
    favoritos: favoritosReducer,
    carrinho: carrinhoReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(produtosApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
