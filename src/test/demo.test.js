// La parte de las pruebas usualmente tiene 3 pasos
// 1) inicializacion
// 2) Estimulo
// 3) Aserciones (observar el comportamiento esperado)

// instalar "npm install --save-dev @types/jest"
// Sirve para no tener que aprenderse todos los tipos

// El describe sirve para describir literalmente el tipo de prueba 
// (para que quede mas entendible)


// la linea del expect dice, se espera que message1 sea message2


// Creamos la carpeta base-pruebas dentro de test y
//  el archivo 02-template-string.test.js
//  El apunte sigue ahi


const { render } = require("@testing-library/react");
describe("Pruebas en <EsteComponente />", () => {
  test("esta prueba no debe fallar", () => {
    const message1 = "Hola mundo";
    const message2 = message1.trim();

    expect(message1).toBe(message2);
  });
});
