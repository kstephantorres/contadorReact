import 'bootstrap/dist/css/bootstrap.min.css'
import TituloSecundario from './components/TituloSecundario'

function App() {
  // Aquí se agrega toda la logica que necesite para este componente
  return ( 
    // Se puede agregar un poco de logica 
    <>
    <section className='container my-4'>
      <h1 className='display-3 text-center'>Contador con React</h1>
      <TituloSecundario></TituloSecundario>
    </section>
    </>
  )
}

export default App
