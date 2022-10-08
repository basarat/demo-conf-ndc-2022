export function addFullName<T extends { firstName: string, lastName: string }>(obj: T): T & { fullName: string } {
  return {
    ...obj,
    fullName: obj.firstName + ' ' + obj.lastName,
  };
}

const jack = addFullName({
  firstName: 'Jack',
  lastName: 'Dawson',
});