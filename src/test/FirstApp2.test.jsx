// importamos el screen, nos va a ayudar a hacer limpiezas automaticas despues de cada prueba


import { render, screen } from "@testing-library/react";
import { FirstApp } from "../FirstApp";


describe("Pruebas en <FirstApp />", () => {
    // test("debe mostrar el titulo en un h1", () => {
    //     const title = "Hola soy Guido"
    //     const { container } = render(<FirstApp title={title} />)

    //     expect(container).toMatchSnapshot()
    // });

    test("debe mostrar el mensaje 'Hola me llamo Guido'", () => {
        render(<FirstApp title={title} />)
        expect(screen.getByText(title).not.toBeTruthy())
    })
});