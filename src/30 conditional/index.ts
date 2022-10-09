function typeName(obj: unknown) {
  return obj === null ? 'null' : 'not-null';
}

const forNull = typeName(null);
const forOther = typeName(123);