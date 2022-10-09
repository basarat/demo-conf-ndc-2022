// Optional members for consumers
type CircleConfig = {
  color?: string,
  radius?: number,
}

class Circle {
  // Internally all members will always be present
  private config: CircleConfig;

  constructor(config: CircleConfig) {
    this.config = {
      color: config.color ?? 'green',
      radius: config.radius ?? 0,
    }
  }

  draw() {
    console.log('Drawing a circle.');
    /** Should be no null checking needed */
    // const color: string = this.config.color; 
    // const radius: number = this.config.radius;
  }
}