export type Point = {
  x: number,
  y: number,
  z: number,
};

const origin: Point = { x: 0, y: 0, z: 0 };
origin.x = 1; // Should Error