export function addFullName<T>(obj: T) {
  return {
    ...obj,
    // fullName: obj.firstName + " " + obj.lastName,
  };
}

const jack = addFullName({ firstName: 'Jack', lastName: 'Dawson' });
const rose = addFullName({ firstName: 'Rose', lastName: 'Hockley' });

// console.log(jack.fullName);
// console.log(rose.fullName);