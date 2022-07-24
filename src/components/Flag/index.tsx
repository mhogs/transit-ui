/* eslint-disable react-native/no-inline-styles */
import React, { memo, useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { colors } from './../../themes'

const TYPES = {
    success: colors.success,
    waiting: colors.waiting,
    canceled: colors.canceled,
}

type Props = {
    text: string
    type?: 'success' | 'waiting' | 'canceled'
    style?: any
    textStyle?: any
    hasBackground?: boolean,
    color?: string
}

const Flag = ({
    text,
    type = 'success',
    style,
    textStyle,
    hasBackground,
    color
}: Props) => {
    const [selectedType, setSelectedType] = useState<string>(TYPES.success)
    const [ishasBackground, setHasBackground] = useState<boolean>(false)

    useEffect(() => {
        setSelectedType(color || TYPES[type || 'success'])
    }, [type, color])

    useEffect(() => {
        setHasBackground(!!hasBackground)
    }, [hasBackground])

    return (
        <View
            style={{
                borderWidth: 1,
                borderColor: selectedType,
                borderRadius: 50,
                paddingVertical: 2,
                paddingHorizontal: 16,
                alignSelf: 'flex-start',
                backgroundColor: ishasBackground ? selectedType + 15 : colors.transparent,
                ...style,
            }}
        >
            <Text
                style={{
                    color: selectedType,
                    fontSize: 10,
                    lineHeight: 0,
                    textTransform: 'uppercase',
                    fontWeight: '600',
                    ...textStyle,
                }}
            >
                {text}
            </Text>
        </View>
    )
}

export default memo(Flag)
