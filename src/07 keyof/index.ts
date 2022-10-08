type Person = {
  name: string,
  age: number,
};

const jack: Person = { name: 'Jack', age: 20 };
const jill: Person = { name: 'Jill', age: 30 };

function logGet(person: Person, key: 'name' | 'age') {
  console.log('Getting', person, key);
  return person[key];
}

const jackAge = logGet(jack, 'age');
const jillAge = logGet(jill, 'age');