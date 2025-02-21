import React from 'react'
import Produto from './Produto'

const App = () => {
  //estado que monitora o produto
  const [produto, setProduto] = React.useState(null)

  //efeito que monitora preferência do notebook e smartphone salva quando faz refresh.
  React.useEffect(() => {
    const produtoLocal = window.localStorage.getItem('produto')
    if(produtoLocal !== null)setProduto(produtoLocal)
  }, []);
  //efeito que monitora o produto
  React.useEffect(() => {
    if(produto !== null)window.localStorage.setItem('produto', produto)
  }, [produto]);
  //função que muda o estado do produto
  function handleClick({ target }) {
    setProduto(target.innerText)
  }
  return (
    <div>
      <h1>Preferência: {produto}</h1>
      <button style={{marginRight: '1rem'}} onClick={handleClick}>Notebook</button>
      <button onClick={handleClick}>Smartphone</button>
      <Produto produto={produto} />
    
    </div>
  )
}

export default App





