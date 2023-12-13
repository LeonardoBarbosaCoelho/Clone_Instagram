import './App.css'
import ConteudoDireito from './components/Conteudo-Direito'
import ConteudoEsquerdo from './components/Conteudo-Esquerdo'
import ConteudoCentral from './components/Conteudo-central'
import ItemMenu from './components/Item-Menu'
function App() {

  return (
    <main>
        <div className = 'conteudo-fantasma'>
          <ConteudoEsquerdo />
        </div>
      <ConteudoCentral />
      <ConteudoDireito />
    </main>
  )
}

export default App
