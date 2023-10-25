/*------------Desestructuración de Objetos------------*/

const person = {
  name: 'Tony',
  age: 45,
  nickName: 'Ironman'
};

const { name: fullName, age, nickName } = person;

console.log(person.name);
console.log(fullName);
console.log(person.age);
console.log(age);
console.log(person.nickName);
console.log(nickName);

const usecontext = ({ name: fullName, age, nickName, rank = 'Captan' }) => {
  // console.log(fullName, age, nickName);
  return {
    claveName: nickName,
    year: age,
    latlng: {
      lat: 35.59568,
      lng: 85.55268
    }
  }
};

const { claveName, year, latlng: { lat, lng } } = usecontext(person);

console.log(claveName, year);
console.log(lat, lng);