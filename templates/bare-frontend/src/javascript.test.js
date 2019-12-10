class JavaScriptCalculator {
  #number
  constructor(number) {
    this.#number = number
  }

  add(number) {
    return this.#number + number
  }
}

it('should class private field syntax works for .js files', () => {
  expect(new JavaScriptCalculator(1).add(1)).toEqual(2)
})
