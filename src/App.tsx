import { useSelector, useDispatch } from 'react-redux'
import Header from './components/Header'
import Produtos from './containers/Produtos'
import { GlobalStyle } from './styles'

import { RootState } from './store/store'
import { useGetProdutosQuery } from './services/produtosApi'
import { toggleFavorito } from './store/reducers/favoritosSlice'
import { adicionarAoCarrinho } from './store/reducers/carrinhoSlice'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

function App() {
  const dispatch = useDispatch()

  const { data: produtos } = useGetProdutosQuery()

  const favoritos = useSelector((state: RootState) => state.favoritos.favoritos)
  const carrinho = useSelector((state: RootState) => state.carrinho.itens)

  function favoritar(produto: Produto) {
    dispatch(toggleFavorito(produto))
  }

  function adicionarProdutoAoCarrinho(produto: Produto) {
    dispatch(adicionarAoCarrinho(produto))
  }

  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header favoritos={favoritos} itensNoCarrinho={carrinho} />
        <Produtos
          produtos={produtos || []}
          favoritos={favoritos}
          favoritar={favoritar}
          adicionarAoCarrinho={adicionarProdutoAoCarrinho}
        />
      </div>
    </>
  )
}

export default App
