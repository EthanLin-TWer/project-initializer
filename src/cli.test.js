import { Calculator } from './cli'

it('should return 2 when calculating 1 + 1', () => {
  expect(new Calculator(1).add(1)).toEqual(2)
})
