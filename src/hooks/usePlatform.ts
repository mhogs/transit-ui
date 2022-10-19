import React from 'react'

type platformType = 'web' | 'native' | 'node'

export const usePlatform: () => platformType = () => {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return 'native'
  } else if (typeof document !== 'undefined') {
    return 'web'
  } else {
    return 'node'
  }
}
