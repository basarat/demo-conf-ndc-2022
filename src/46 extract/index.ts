export type Result = Extract<
  'a' | 'b' | 'c',
  'a' | 'b' | 'd'
>;

type Person = {
  id: string,
  name: string,
  email: string,
};

type Animal = {
  id: string,
  name: string,
  species: string,
};

/** Use Extract to get the common keys */
type CommonKeys = Extract<keyof Person, keyof Animal>;

/** And then map over the intersection */
type Base = {
  [K in CommonKeys]: (Animal & Person)[K]
};
