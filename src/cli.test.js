import { TypeScriptCalculator } from './cli'

class JavaScriptCalculator {
  #number
  constructor(number) {
    this.#number = number
  }

  add(number) {
    return this.#number + number
  }
}

it('should ES6 import/export works', () => {
  expect(1 + 1).toEqual(2)
})

it('should typescript works', () => {
  expect(new TypeScriptCalculator(1).add(1)).toEqual(2)
})

it('should class private field syntax works for .js files', () => {
  expect(new JavaScriptCalculator(1).add(1)).toEqual(2)
})
