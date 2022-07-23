/* eslint-disable react-native/no-inline-styles */
import React, { memo, useEffect, useState } from 'react'
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native'
import colors from '../../themes/colors'

type Props = {
    text: string
    onPress?: CallableFunction
    loading?: boolean
    style?: any
    bordered?: boolean
    disabled?: boolean
}

const Button = ({
    text,
    onPress,
    loading,
    style,
    bordered,
    disabled,
}: Props) => {
    const [isLoading, setLoading] = useState(false)
    const [isBordered, setIsBordered] = useState(false)
    const [isDisabled, setIsDisabled] = useState(false)

    useEffect(() => {
        setIsDisabled(!!disabled)
    }, [disabled])

    useEffect(() => {
        setIsBordered(!!bordered)
    }, [bordered])

    useEffect(() => {
        setLoading(!!loading)
    }, [loading])

    return (
        <TouchableOpacity
            style={{
                backgroundColor: isBordered
                    ? colors.transparent
                    : isLoading || isDisabled
                        ? colors.gray + 20
                        : colors.main,
                height: 55,
                borderRadius: 8,
                borderWidth: isBordered ? 1 : 0,
                borderColor: isLoading || isDisabled ? colors.gray : colors.main,
                ...style,
            }}
            onPress={() => {
                if (onPress) onPress()
            }}
            disabled={isDisabled || isLoading}
        >
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                {isLoading ? (
                    <ActivityIndicator color={colors.gray} />
                ) : (
                    <Text
                        style={{
                            fontSize: 17,
                            fontWeight: 'bold',
                            color: isDisabled ? colors.gray : isBordered ? colors.main : '#fff',
                            textTransform: 'capitalize',
                        }}
                        numberOfLines={1}
                    >
                        {text}
                    </Text>
                )}
            </View>
        </TouchableOpacity>
    )
}

/**
 *
 * loading - ...
 */
export default memo(Button)
