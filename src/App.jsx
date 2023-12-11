import 'bootstrap/dist/css/bootstrap.min.css'
import TituloSecundario from './components/TituloSecundario'
import Contador from './components/Contador'

function App() {
  // Aquí se agrega toda la logica que necesite para este componente
  const anioActual=2023
  return ( 
    // Se puede agregar un poco de logica 
    <>
    <section className='container my-4'>
      <h1 className='display-3 text-center'>Contador con React</h1>
      {/* <TituloSecundario/> Tambien sirve pero hay componentes puntuales en que no se puede  */}
      <TituloSecundario comision='c73i' anioActual={anioActual}></TituloSecundario>
      <Contador></Contador>
    </section>
    </>
  )
}

export default App
