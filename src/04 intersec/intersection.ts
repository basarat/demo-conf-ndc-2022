export type PersonMessage = {
  kind: string,
  nonce: number,
  firstName: string,
  yearOfBirth: number,
}

export type CarMessage = {
  kind: string,
  nonce: number,
  make: string,
  model: string,
}
