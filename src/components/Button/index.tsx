/* eslint-disable react-native/no-inline-styles */
import React, { memo, useEffect, useState } from 'react'
import { ActivityIndicator, Text, Pressable, View, ViewStyle } from 'react-native'
import { colors, common_styles } from './../../themes'

type Props = {
    text: string
    onPress?: CallableFunction
    loading?: boolean
    style?: ViewStyle
    bordered?: boolean
    disabled?: boolean
    hasShadow?: boolean
}

const Button = ({
    text,
    onPress,
    loading,
    style,
    bordered,
    disabled,
    hasShadow
}: Props) => {
    const [isLoading, setLoading] = useState(false)
    const [isBordered, setIsBordered] = useState(false)
    const [isDisabled, setIsDisabled] = useState(false)
    const [isHasShadow, setHasShadow] = useState(false)

    useEffect(() => {
        setHasShadow(!!hasShadow)
    }, [hasShadow])

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
        <Pressable
            style={{
                backgroundColor: isBordered
                    ? colors.transparent
                    : isLoading || isDisabled
                        ? colors.gray + 20
                        : colors.main,
                height: 45,
                borderRadius: 8,
                borderWidth: isBordered ? 1 : 0,
                borderColor: isLoading || isDisabled ? colors.gray : colors.main,
                ...((isHasShadow && !isBordered && !isDisabled) ? common_styles.shadow : {}),
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
                            fontSize: 16,
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
        </Pressable>
    )
}

/**
 *
 * loading - ...
 */
export default memo(Button)
