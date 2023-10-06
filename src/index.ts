import merge from 'lodash-es/merge.js'

/**
 * taken from @micdah from this post
 * https://grrr.tech/posts/2021/typescript-partial/
 * https://twitter.com/micdah/status/1580531114657316865
 */
type Subset<K> = {
  [attr in keyof K]?: K[attr] extends object
    ? Subset<K[attr]>
    : K[attr] extends object | null
    ? Subset<K[attr]> | null
    : K[attr] extends object | null | undefined
    ? Subset<K[attr]> | null | undefined
    : K[attr];
}

export default function createConfigurations<T>(defaultConfig: T) {
  return {
    defineConfig: (options: Subset<T>): T => {
      const config = {}
      
      merge(config, defaultConfig)

      return merge(config, options) as unknown as T
    }
  }
}

