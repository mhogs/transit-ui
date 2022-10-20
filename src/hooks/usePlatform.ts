import React from 'react'

type platformType = 'web' | 'native' | 'node'

export const usePlatform = () => {
  let PLATFORM: platformType = 'native'
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    PLATFORM = 'native'
  } else if (typeof document !== 'undefined') {
    PLATFORM = 'web'
  } else {
    PLATFORM = 'node'
  }
  /** in web width: 14 will not work but width:14px will */
  function includeUnitIfWeb(value: number): any {
    if (PLATFORM === 'native') return value
    return `${value}px`
  }

  return { PLATFORM, includeUnitIfWeb }
}
