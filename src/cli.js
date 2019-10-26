export class Calculator {
  #number
  constructor(number) {
    this.#number = number
  }

  add(one) {
    return this.#number + one
  }
}
