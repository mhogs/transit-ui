import React, { memo, ReactNode } from 'react'
import { Text, View } from 'react-native'

type Props = {
    children?: ReactNode
    style?: any
}
const Box = ({ children, style }: Props) => {

    return <View
        style={{
            shadowColor: "#000",
            shadowOffset: {
                width: 1,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
            paddingHorizontal: 16,
            paddingVertical: 10,
            backgroundColor: '#fff',
            marginVertical: 5,
            borderRadius: 8,
            ...style
        }}
    >
        {children}
    </View>
}

export default memo(Box)