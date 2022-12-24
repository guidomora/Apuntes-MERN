// Creamos la carpeta data y dentro creamos heroes.js que tiene un json con info sobre heroes

// import { getHeroeById } from "../../base-pruebas/08-imp-exp";

// Probamos si hero es igual al objeto: { id: 1, name: 'Batman', owner: 'DC' }

// describe("Pruebas en 08-imp-exp" , () => {
//     test("getHeroesById debe retornar un heroe por ID", () => {
//         const id = 1;
//         const hero = getHeroeById(id);

//         expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' })
//     })
// })

// En este test probamos si se da un ID que no existe que retorne undefined
// el toBeFalsy significa que tiene un valor nulo

// import { getHeroeById } from "../../base-pruebas/08-imp-exp";

// describe("Pruebas en 08-imp-exp" , () => {
//     test("getHeroesById debe retornar undefined si no existe el ID", () => {
//         const id = 100;
//         const hero = getHeroeById(id);

//         expect(hero).toBeFalsy();
//     })
// })

import { getHeroesByOwner } from "../../base-pruebas/08-imp-exp";

describe("Pruebas en 08-imp-exp", () => {
  test("getHeroesByOwner debe retornar un array segun los owners", () => {
    const owner = "Marvel";
    const heroes = getHeroesByOwner(owner);
    console.log(heroes);

    expect(heroes.length).toBe(2);


    // expect(heroes).toEqual([
    //   { id: 2, name: "Spiderman", owner: "Marvel" },
    //   { id: 5, name: "Wolverine", owner: "Marvel" },
    // ]);
    // Se puede hacer de la forma de arriba tambien

  });
});

// El apunte sigue en la 09
