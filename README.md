# configurator
easy optional configuration that overlays optional propers over a base or default config

## behavior
```js
import createConfigurator from '@john-ko/configurator'
const config = {
  nestedOption: {
    somekeys: 'apple',
    nestedOptionAgain: {
      somekeys: 'banana',
      nestedOption: {
        somekeyA: 'a',
        somekeyB: 'b'
      }
    }
  }
}
const { defineConfig } = createConfigurations(config)

// you can export it out
// export { defineConfig }

// or
const cfg = defineConfig({
  nestedOption: {
    nestedOptionAgain: {
      nestedOption: {
        somekeyA: 'AAAAA'
      }
    }
  }
})

//outputs
console.log(JSON.string(cfg))
// {
//   "nestedOption": {
//     "somekeys": "apple",
//     "nestedOptionAgain": {
//       "somekeys": "banana",
//       "nestedOption": {
//         "somekeyA": "AAAAA",
//         "somekeyB": "b"
//       }
//     }
//   }
// }
```

## usage

### example
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
