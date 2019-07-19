import { babelWorksWithExports, PrivateClass } from './index'

it('should jest works', () => {
  expect(babelWorksWithExports()).toEqual(true)
})

it('should support private class methods', () => {
  const result = new PrivateClass(2).getDouble()

  expect(result).toEqual(4)
})
