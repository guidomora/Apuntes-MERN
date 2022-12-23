// defaultProps: 

// si no queremos definir props por defecto cuando hacemos la desestructuracion,
// podemos usar defaultProps.

// En el caso de que no haya una prop definida se va a renderizar la de default y hasta podemos definir
// nuevas props.


import './App.css'
import PropTypes from "prop-types"


const Probando = ({ titulo, nombre }) => {
  return (
    <div>
      <h1>{titulo}</h1>
      <h2>{nombre}</h2>
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

Probando.defaultProps = {
  titulo: "No hay titulo",
  nombre: "Guido"
}