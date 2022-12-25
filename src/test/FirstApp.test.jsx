// Importmos el componente render, le decimos que intente renderizar el componente FirstApp
// Esto nos va a dar un error de configuracion.
// Vamos a jest.config.js y escribimos lo siguiente: testEnvironment: 'jest-environment-jsdom'
// instalamos : npm i jest-environment-jsdom
// En babel.config escribimos lo siguiente presets: [
//     ["@babel/preset-env", { targets: { esmodules: true } }],
//     ["@babel/preset-env", { runtime: "automatic" }],
//   ],
// Instalamos: npm i @babel/preset-react

const { render } = require("@testing-library/react");
const { FirstApp } = require("../FirstApp");


describe("Pruebas en <FisrtApp />", () => {
    test("debe hacer match con el snapshot", () => {
        render(<FirstApp title={title}/>)
    });
  });