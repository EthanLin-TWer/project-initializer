import { TypeScriptCalculator } from './cli'

it('should ES6 import/export works', () => {
  expect(1 + 1).toEqual(2)
})

it('should typescript works', () => {
  expect(new TypeScriptCalculator(1).add(1)).toEqual(2)
})
