import Header from "./Header"
import Home from "./Home"
import Produto from "./Produtos"

const App = () => {
  const { pathname } = window.location
  
  let Pagina;
  if (pathname === "/produtos") {
    Pagina = Produto
  } else {
    Pagina = Home
  }
  
  return (
    <section>
    <Header />
    <Pagina />
    </section>
  )
    }

export default App