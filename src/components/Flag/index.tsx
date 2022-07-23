/* eslint-disable react-native/no-inline-styles */
import React, { memo, useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import colors from '../../themes/colors'

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
    hasBackground?: boolean
}

const Flag = ({
    text,
    type = 'success',
    style,
    textStyle,
    hasBackground,
}: Props) => {
    const [selectedType, setSelectedType] = useState<string>(TYPES.success)
    const [ishasBackground, setHasBackground] = useState<boolean>(false)

    useEffect(() => {
        setSelectedType(TYPES[type || 'success'])
    }, [type])

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
                backgroundColor: ishasBackground ? selectedType + 15 : 'transpernt',
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
