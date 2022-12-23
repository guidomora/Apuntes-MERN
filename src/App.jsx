// Seccion de testing:
// En vite hay que configurarlo desde 0 (con CRA tamb hay que configurar pero no desde 0)

// Vamos a usar Jest y React testing library
//  instalamos: npm install --save-dev jest



import { useState } from 'react';
import PropTypes from 'prop-types';

 const App = ({ value }) => {
    
    const [ counter, setCounter ] = useState( value );

    const handleAdd = () => { 
        // console.log(event)
        setCounter( counter + 1 );
        // setCounter( (c) => c + 1 )
    }

    const handleSubstract = () => setCounter( counter - 1 );
    const handleReset = () => setCounter( value );

    return (
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>

            <button onClick={ handleAdd }> +1 </button>
            <button onClick={ handleSubstract }> -1 </button>
            <button aria-label="btn-reset" onClick={ handleReset }> Reset </button>
        </>
    );
}

export default App;

App.propTypes = {
    value: PropTypes.number.isRequired
}