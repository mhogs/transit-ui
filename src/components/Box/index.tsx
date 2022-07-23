/* eslint-disable react-native/no-inline-styles */
import React, { memo, ReactNode } from 'react'
import { View } from 'react-native'
import { common_styles } from '../../themes'

type Props = {
  children?: ReactNode
  style?: any
}
const Box = ({ children, style }: Props) => {
  return (
    <View
      style={{
        ...common_styles.shadow,
        paddingHorizontal: 16,
        paddingVertical: 10,
        backgroundColor: '#fff',
        marginVertical: 5,
        borderRadius: 8,
        ...style,
      }}
    >
      {children}
    </View>
  )
}

export default memo(Box)
