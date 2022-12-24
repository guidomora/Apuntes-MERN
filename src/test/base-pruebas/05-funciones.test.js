// Apuntes:
// Ejecutamos la prueba con este codigo 

// import { getUser } from "../../base-pruebas/05-funciones";

// describe("Pruebas en 05-funciones", () => {
//   test("getUser debe retornar un objeto ", () => {
//     const testUser = {
//       uid: "ABC123",
//       username: "El_Papi1502",
//     };

//     const user = getUser()
//     console.log(user)

//     expect(testUser).toBe(user)
//   });
// });

// Nos arroja error y nos da esta advertencia:
// If it should pass with deep equality, replace "toBe" with "toStrictEqual"

// Si lo cambiamos el toBe por el toStrictEqual, la prueba va a pasar
// Porque los objetos aunque los pasemos iguales, necesitan ser comparado con estricta igualdad
//  Si lo cambiamos a toEqual tambien funciona


// import { getUser } from "../../base-pruebas/05-funciones";

// describe("Pruebas en 05-funciones", () => {
//   test("getUser debe retornar un objeto ", () => {
//     const testUser = {
//       uid: "ABC123",
//       username: "El_Papi1502",
//     };

//     const user = getUser()
//     console.log(user)

//     expect(testUser).toEqual(user)
//   });
// });

// En el codigo de abajo probamos getUsuarioActivo, que retorne un objeto
// donde pasemos el nombre y que sea evaluado 

// El apunte sigue en 07-deses


import { getUser, getUsuarioActivo } from "../../base-pruebas/05-funciones";

describe("Pruebas en 05-funciones", () => {
  test("getUser debe retornar un objeto ", () => {
    const name = "Guido"

    const testUser = {
        uid: 'ABC567',
        username: name
    };

    const user = getUsuarioActivo(name)

    expect(testUser).toEqual(user)
  });
});
