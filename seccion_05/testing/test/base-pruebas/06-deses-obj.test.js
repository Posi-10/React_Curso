import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe('Pruebas en 06-deses-obj', () => {
  test('usContext debe de retornar un areglo ', () => {

    const objetoPrueba = {
      clave: 'Posi',
      nombre: 'Miguel Angel',
      edad: 24,
      rango: 'Junnior'
    };

    const { nombre, nombreClave, anios, rango, latlng: { lat, lng } } = usContext(objetoPrueba);

    expect(nombre).toStrictEqual(expect.any(String));
    expect(nombreClave).toStrictEqual(expect.any(String));
    expect(anios).toStrictEqual(expect.any(Number));
    expect(rango).toStrictEqual(expect.any(String));
    expect(lat).toStrictEqual(expect.any(Number));
    expect(lng).toStrictEqual(expect.any(Number));
  })
});