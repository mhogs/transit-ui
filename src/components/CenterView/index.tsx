import React from 'react'
import { View } from 'react-native'
import { common_styles } from '../../themes'

type CenterViewProps = {
  children: React.ReactNode
}
const CenterView = (props: CenterViewProps) => {
  return <View style={common_styles.centred}>{props.children}</View>
}
export default CenterView
