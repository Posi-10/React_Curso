import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('Pruebas en 09-promesas', () => {
  test('getHeroeByIdAsync debe de retornar un Heroe', (done) => {

    const id = 1;

    getHeroeByIdAsync(id).then(hero => {
      expect(hero).toEqual(
        expect.objectContaining({
          id: expect.any(Number),
          name: expect.any(String),
          owner: expect.any(String)
        })
      );
      done();
    });
  });
  test('getHeroeByIdAsync debe de obtener un error si heroe no existe', (done) => {

    const id = 100;

    getHeroeByIdAsync(id).catch(error => {
      expect(error).toEqual(expect.any(String));
      done();
    });
  });
});