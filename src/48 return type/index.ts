function createUser(name: string) {
  return {
    id: Math.random(),
    name: name
  };
}

// Make this `{ id: number, name: string }`
type User = any;

/** 
 * REACT 
 */
function useCounter() {
  let count = 0;
  let increment = () => { count++ };
  return {
    count,
    increment,
  }
}

// Make this { count: number, increment: () => void }
type Props = any; 

function Counter(props: Props) {
  // ...
}
