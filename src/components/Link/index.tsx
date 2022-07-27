import React, { memo, useState, useEffect } from 'react'
import { Text, TextStyle } from 'react-native'
import { colors } from '../../themes'

type Props = {
    text: string
    onPress?: CallableFunction
    style?: TextStyle
    disabled?: boolean
    color?: string
}

const Link = ({ text, onPress, style, disabled, color }: Props) => {
    const [isDisabled, setIsDisabled] = useState(false)
    const [customColor, setColor] = useState<string>();

    useEffect(() => {
        setColor(color)
    }, [color])

    useEffect(() => {
        setIsDisabled(!!disabled)
    }, [disabled])

    return (
        <Text
            {...(!isDisabled && {
                onPress: () => {
                    if (onPress) onPress()
                }
            })}
            style={{
                color: isDisabled ? colors.gray : (customColor || colors.main),
                textDecorationLine: 'underline',
                fontWeight: isDisabled ? '100' : '600',
                ...style
            }}
        >
            {text}
        </Text>
    )
}

export default memo(Link)