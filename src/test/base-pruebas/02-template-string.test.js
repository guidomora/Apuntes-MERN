// importamos getSaludo
// Le pasamos el name y el message
// Nos da un error de configuracion, instalamos: 
// npm install --save-dev babel-jest @babel/core @babel/preset-env (si estuvieramos con CRA, no hace falta)
//  creamos el archivo babel.config.cjs y pegamos el codigo de la pag de jest (module.export etc...)
// En el test se va a probar si getSaludo retorna "Hola Guido"
// Para que no ejecute todos los test en la terminal tocamos w y p luego donde nos dice pattern
// Escribimos el nombre del archivo, en este caso con poner 02-template ya alcanza y le damos enter

// Pasamos al archivo 05-funciones


import { getSaludo } from "../../base-pruebas/02-template-string";

describe("Pruebas en 02-template-string" , () => {
    test("getSaludo debe retornar 'Hola Guido' ", () => {
        const name = "Guido";
        const message = getSaludo(name);

        expect(message).toBe(`Hola ${name}`)
    })
})