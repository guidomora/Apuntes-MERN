// Apuntes:
// Las pruebas son sincronas (ejecuta todo el codigo en secuencia)
// Por eso cuando testeamos promesas hay que poner done() como parametro y al final
// Porque sino se ejecuta todo, las pruebas van a pasar y luego una vez que cargue
// la promesa, ahi nos va a dar el error. el done() hace que finalice la prueba una vez que se ejecute todo
// (Se puede hacer con asyn y await, lo vamos a ver en la prox clase)

// import { getHeroeByIdAsync } from "../../base-pruebas/09-promesas";

// describe("Pruebas en 09-promesas" , (done) => {
//     test("getHeroesByIdAsync debe retornar un heroe", () => {
//         const id = 1;
//         getHeroeByIdAsync(id)
//         .then(hero =>{
//             expect(true).toEqual({
//                 id: 1,
//                 name: 'Batman',
//                 owner: 'DC'
//             })
//             done()
//         })
//     })
// })



// En este test, hacemos que nos arroje un error si no encuentra un heroe con ese id

import { getHeroeByIdAsync } from "../../base-pruebas/09-promesas";

describe("Pruebas en 09-promesas", (done) => {
  test("getHeroesByIdAsync debe obtener un error si heroe no existe", () => {
    const id = 100;
    getHeroeByIdAsync(id).catch(error => {
      expect(error).toBe("No se puedo encontrar el heroe con ese ID")
      done();
    });
  });
});
