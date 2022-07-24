/* eslint-disable react-native/no-inline-styles */
import React, { memo, useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { colors } from '../../themes'

const TYPES = {
    success: colors.success,
    warning: colors.waiting,
    error: colors.canceled,
}

type Props = {
    text: string
    type?: 'success' | 'warning' | 'error'
    style?: any
    textStyle?: any
    hasBackground?: boolean,
    color?: string
}

const Message = ({
    text,
    type = 'success',
    style,
    textStyle,
    hasBackground = true,
    color
}: Props) => {
    const [selectedType, setSelectedType] = useState<string>(TYPES.success)
    const [ishasBackground, setHasBackground] = useState<boolean>()

    useEffect(() => {
        setSelectedType(color || TYPES[type || 'success'])
    }, [type, color])

    useEffect(() => {
        setHasBackground(!!hasBackground)
    }, [hasBackground])

    return (
        <View
            style={{
                borderWidth: .3,
                borderColor: selectedType,
                borderRadius: 8,
                paddingVertical: 7,
                paddingHorizontal: 16,
                backgroundColor: ishasBackground ? selectedType + 10 : colors.transparent,
                ...style,
            }}
        >
            <Text
                style={{
                    color: selectedType,
                    fontSize: 10,
                    lineHeight: 0,
                    ...textStyle,
                }}
            >
                {text}
            </Text>
        </View>
    )
}

export default memo(Message)
