export type Point3D = {
  x: number,
  y: number,
  z: number,
};

type All = keyof Point3D;

// Challenge
type notZ = 'x' | 'y';