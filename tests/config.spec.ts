import createConfigurations from '../src/index.js'

type config = {
  name: string,
  fruit: 'apple' | 'banana',
  option: {
    type: string
    nested: {
      a: number,
      b: number
    }
  }
}

describe('createConfigurations', () => {
  describe('defineConfig', () => {
    it('creates a optional configuration based on the default', () => {
      const { defineConfig } = createConfigurations<config>({
        name: 'base',
        fruit: 'apple',
        option: {
          type: 'subtype',
          nested: {
            a: 0,
            b: 0,
          }
        }
      })

      const config = defineConfig({
        name: 'defined-name',
        fruit: 'banana',
        option: {
          nested: {
            a: 1
          }
        }
      })

      expect(config).toEqual({
        name: 'defined-name',
        fruit: 'banana',
        option: {
          type: 'subtype',
          nested: {
            a: 1,
            b: 0,
          }
        }
      })
    })
  })
})
