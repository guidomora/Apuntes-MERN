// npm i whatwg-fetch


import { getImagen } from "../../base-pruebas/11-async-await";

describe("Pruebas en 011-async-await", () => {
  test("getImagen debe retornar un URL de imagen", async () => {
    const url = await getImagen();
    expect(typeof url).toBe("string")
  });
});
