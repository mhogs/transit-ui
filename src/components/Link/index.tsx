import React, { memo } from 'react'
import { Text } from 'react-native'
import colors from '../../themes/colors'

type Props = {
    text: string,
    onPress?: CallableFunction,
    style?: any
}

const Link = ({ text, onPress, style }: Props) => {

    return (
        <Text
            onPress={() => {
                if (onPress) onPress()
            }}
            style={{
                color: colors.main,
                textDecorationLine: 'underline',
                fontWeight: '600',
                ...style
            }}
        >
            {text}
        </Text>
    )
}

export default memo(Link)