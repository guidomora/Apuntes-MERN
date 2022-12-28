// Apuntes:
//  Instalamos react testing lbrary: npm install --save-dev @testing-library/react
// React testing library es muy buena opcion para todo lo que tenga que ver con el DOM
// Esta mas orientada a la pantalla.
// En CRA ya viene instalada
// Creamos el archivo para hacer la prueba, talcual veniamos hacendo antes pero con la extension de jsx

import PropTypes from 'prop-types';

export const FirstApp = ({ title, subTitle, name }) => {

  // console.log(props);
  
  return (
    <>
      <div data-testid="test-title">{ title }</div>
      {/* <code>{ JSON.stringify( newMessage ) }</code> */}
      <p>{ subTitle }</p>
      <p>{ subTitle }</p>
      <p>{ name }</p>
    </>
  )
}


FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
}

FirstApp.defaultProps = {
  name: 'Fernando Herrera',
  subTitle: 'No hay subtítulo',
  // title: 'No hay título',
}