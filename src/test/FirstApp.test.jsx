// Importmos el componente render, le decimos que intente renderizar el componente FirstApp
// Esto nos va a dar un error de configuracion.
// Vamos a jest.config.js y escribimos lo siguiente: testEnvironment: 'jest-environment-jsdom'
// instalamos : npm i jest-environment-jsdom
// En babel.config escribimos lo siguiente presets: [
//     ["@babel/preset-env", { targets: { esmodules: true } }],
//     ["@babel/preset-env", { runtime: "automatic" }],
//   ],
// Instalamos: npm i @babel/preset-react

// El render actualiza el objeto string

// Apenas ejecutamos la prueba asi
// describe("Pruebas en <EsteComponente />", () => {
//   test("esta prueba no debe fallar", () => {
//     const message1 = "Hola mundo";
//     const message2 = message1.trim();

//     expect(message1).toBe(message2);
//   });
// });
// Dentro de test nos crea una carpeta que se llama snapshots y que va a contener una "fotografia"
// de lo que se renderiza al realizar la prueba. Tambien nos sirve por si se borraalgo del componente
// y se ejecuta la prueba, va a dar error porque esta faltando una parte. Esto se puede actualizar ya que
// puede haber un cambio en el componente y sino nos va a estar arrojando error acada rato

// ----------------------------------------------------------------
// describe("Pruebas en <FirstApp />", () => {
//     test("debe hacer match con el snapshot", () => {
//         const title = "Hola soy Guido"
//         const{container} = render(<FirstApp title={title}/>)
//         expect(container).toMatchSnapshot();
//     });

//     test("debe mostrar el titulo en un h1", () => {
//         const title = "Hola soy Guido"
//         const{container, getByText} = render(<FirstApp title={title}/>)
//         expect(getByText(title)).toBeTruthy()

//         const h1 = container.querySelector("h1")
//         expect(h1.innerHTML).toContain(title)

//     });
//   });
//   Analisis del segundo test (arriba)
// en la constante h1 literalmente estamos buscando el h1 del dom (se puede usar getElementById, etc)
// En la segunda linea decimos que se espera que el h1 contenga el title. Usamos toContain porque
// Capaz en el componente nosotros tenemos espacios por ej <h1> {title} </h1> y nosotros en la prueba lo pusimos sin espacios
// Entonces con el toBe nos daria un error y la prueba no pasaria


// En FirstApp.jsx cambiamos el h1 por un div y le agregamos data-testid="test-title"
// Asi podemos usar el getByTestId

import { render } from "@testing-library/react";
import { FirstApp } from "../FirstApp";


describe("Pruebas en <FirstApp />", () => {
    test("debe mostrar el titulo en un h1", () => {
        const title = "Hola soy Guido"
        const { container, getByText, getByTestId } = render(<FirstApp title={title} />)
        expect(getByText(title)).toBeTruthy()

        expect(getByTestId("test-title").innerHTML).toBe(title)

    });
});