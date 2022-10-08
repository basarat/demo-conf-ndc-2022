type Person = {
  name: string,
  age: number,
};

function logGet(person: Person, key: keyof Person) {
  console.log('Getting', person, key);
  return person[key];
}

const jack: Person = { name: 'Jack', age: 20 };
const jill: Person = { name: 'Jill', age: 30 };

const jackAge = logGet(jack, 'age');
const jillAge = logGet(jill, 'age');