import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe('Pruebas en 08-imp-exp', () => {
  test('getHeroeById debe de retornar un heroe por ID', () => {

    const id = 1;

    const hero = getHeroeById(id);

    expect(hero).toEqual(expect.any(Object));

  });

  test('getHeroeById debe de retornar undefined si no existe', () => {

    const id = 15;

    const hero = getHeroeById(id);

    expect(hero).toBeFalsy();

  });

  test('getHeroesByOwner debe de retornar un arreglo de objetos, solo con los tipos de DC', () => {

    const owner = 'DC';

    const hero = getHeroesByOwner(owner);

    expect(hero).toHaveLength(3);
    expect(hero).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(Number),
          name: expect.any(String),
          owner: owner
        })
      ])
    );
  });

  test('getHeroesByOwner debe de retornar un arreglo de objetos, solo con los tipos de Marvel', () => {

    const owner = 'Marvel';

    const hero = getHeroesByOwner(owner);

    expect(hero).toHaveLength(2);

  })
});