import { Calculator } from './cli'

it('should ES6 import/export works', () => {
  expect(1 + 1).toEqual(2)
})

it('should class private field syntax works', () => {
  expect(new Calculator(1).add(1)).toEqual(2)
})
