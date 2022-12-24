// Apuntes:
 
// describe("Pruebas en 07-deses-arr" , () => {
//     test("Debe retornar un string y un numero", () => {
//         const retorno = retornaArreglo()
//         console.log(retorno)
//     })
// })

// El console.log nos muestra el array ["ABC", 123]
// Nosotros nos queremos asegurar que retorne un string al inicio y despues un number
// Entonces desestructuramos los valores
//  En las linesa 23 y 24 les decimos que valores tiene que retornar, pero no siempre lo vamos
//  a saber eso. Por eso en las lineas 27 y 28 especificamos que tipos de valores recibiriamos

// El apunte sigue en el 08-imp-exp.test.js


import { retornaArreglo } from "../../base-pruebas/07-deses-arr"


describe("Pruebas en 07-deses-arr" , () => {
    test("Debe retornar un string y un numero", () => {
        const [letters, numbers] = retornaArreglo()

        expect(letters).toBe("ABC")
        expect(numbers).toBe(123)

        expect(typeof letters).toBe("string")
        expect(typeof numbers).toBe("number")
    })
})