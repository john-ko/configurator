# configurator

## usage

```ts
// config.ts
import createConfigurator from '@john-ko/configurator'

type config = {
  name: string,
  options: 'a' | 'b' | 'c'
  nested: {
    n1: boolean,
    options: {
      n2: number
      nested: {
        n3: string
      }
    }
  }
}

const defaultConfig: config = {
  name: 'name',
  options: 'a',
  nested: {
    n1: false,
    options: {
      n2: 0,
      nested: {
        n3: ''
      }
    }
  }
}

const { defineConfig } = createConfigurations<config>(defaultConfig)

export { defineConfig }
```

```ts
// whoever-using-this-config.ts
import { defineConfig } = './config.js'

/** all options are optional, and will overlay on default config */
export default defineConfig({})
```