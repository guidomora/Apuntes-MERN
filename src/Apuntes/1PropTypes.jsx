// PropTypes:
// Le asigna un "tipo" a la prop, por ejemplo si tiene que ser string, numero, etc
// y tambien si es obligatorio con el isRequired.
// 
// En vite no viene instalado (en CRA si) asi que se instala con npm install prop-types



import './App.css'
import PropTypes from "prop-types"


const Probando = ({ titulo }) => {
  return (
    <div>
      <h1>{titulo}</h1>
    </div>
  )
}

function App() {

  return (
    <div>
      <Probando titulo={"Este es el titulo"} />
      primer app con vite
    </div>
  )
}

export default App


Probando.propTypes = {
  titulo: PropTypes.string.isRequired
}