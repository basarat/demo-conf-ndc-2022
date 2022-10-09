type Person = {
  name: string,
  age: number,
};

const jack: Person = { name: 'Jack', age: 20 };
const jill: Person = { name: 'Jill', age: 30 };

// Can we make the key reliable?
// Cane we make this generic?
function logGet(person: Person, key: 'name' | 'age') {
  const value = person[key];
  console.log('Getting', person, key, value);
  return value;
}

const jackAge = logGet(jack, 'age');
const jillAge = logGet(jill, 'age');