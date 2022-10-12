import React, { memo, useCallback, useEffect, useState } from 'react'
import { Image, StyleSheet, Text, Pressable, View, ViewStyle } from 'react-native'
import { minus_icon, plus_icon } from '../../assets'
import { colors } from './../../themes'


type Props = {
    value?: number
    min?: number
    max?: number
    onChange?: CallableFunction
    text?: string
    style?: ViewStyle
    buttonStyle?: ViewStyle
    disabled?: boolean
}

const Counter = (({
    value = 0,
    min,
    max,
    onChange,
    text,
    style,
    buttonStyle,
    disabled
}: Props) => {
    const [count, setCount] = useState<number>();
    const [minValue, setMin] = useState<number>(0);
    const [maxValue, setMax] = useState<number>(10);
    const [isDisabled, setIsDisabled] = useState<boolean>()

    useEffect(() => {
        setIsDisabled(!!disabled)
    }, [disabled])

    const onMinus = useCallback(() => {
        if (typeof count === 'number' && minValue < count) {
            setCount(count - 1)
        }
    }, [count, minValue])

    const onPlus = useCallback(() => {
        if (typeof count === 'number' && maxValue > count) {
            setCount(count + 1)
        }
    }, [count, maxValue])

    useEffect(() => {
        if (onChange && typeof count === 'number')
            onChange(count)
    }, [count])

    useEffect(() => {
        if (typeof value === 'number')
            setCount(prev => prev !== value ? value : prev)
    }, [value])

    useEffect(() => {
        if (typeof min === 'number') {
            setMin(min)
            if (typeof count === 'number' && count < min)
                setCount(min)
        }

    }, [min, count])

    useEffect(() => {
        if (typeof max === 'number') {
            setMax(max)
            if (typeof count === 'number' && count > max)
                setCount(max)
        }
    }, [max, count])

    return (
        <View
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                alignSelf: 'flex-start',
                ...style
            }}
        >
            <Pressable
                style={{
                    ...styles.btn,
                    backgroundColor: (isDisabled || count === minValue) ? colors.gray + 40 : colors.main,
                    ...buttonStyle
                }}
                onPress={onMinus}
                disabled={isDisabled || count === minValue}
            >
                <Image
                    source={minus_icon}
                    style={styles.icon}
                    resizeMode='contain'
                />
            </Pressable>
            <View style={{ width: 60, alignItems: 'center' }}>
                <Text style={{
                    fontSize: text ? 14 : 16,
                    fontWeight: 'bold',
                    color: colors.black_text
                }}>{count}<Text
                    style={{
                        fontWeight: '100',
                        color: colors.gray,
                        fontSize: 12
                    }}>{!!text && ` ${text}`}</Text></Text>
            </View>

            <Pressable
                style={{
                    ...styles.btn,
                    backgroundColor: (isDisabled || count === maxValue) ? colors.gray + 40 : colors.main,
                    ...buttonStyle
                }}
                onPress={onPlus}
                disabled={isDisabled || count === maxValue}
            >
                <Image
                    source={plus_icon}
                    style={styles.icon}
                    resizeMode='contain'
                />
            </Pressable>
        </View>
    )
})

const styles = StyleSheet.create({
    btn: {
        width: 30,
        height: 30,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        width: 15,
        height: 15,
        tintColor: '#fff'
    }
})

export default memo(Counter);