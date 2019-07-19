export const babelWorksWithExports = () => true

export class PrivateClass {
  #number

  constructor(number) {
    this.#number = number
  }

  getDouble() {
    return this.#number * 2
  }
}
