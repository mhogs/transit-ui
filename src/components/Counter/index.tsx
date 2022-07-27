import React, { memo, useCallback, useEffect, useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native'
import { colors } from './../../themes'
import plus_icon from './../../assets/images/plus.png'
import minus_icon from './../../assets/images/minus.png'

type Props = {
    value?: number
    min?: number
    max?: number
    onChange?: CallableFunction
    text?: string
    style?: ViewStyle
    buttonStyle?: ViewStyle
}

const Counter = (({
    value = 0,
    min = 0,
    max = 10,
    onChange,
    text,
    style,
    buttonStyle
}: Props) => {
    const [count, setCount] = useState<number>(0);
    const [minValue, setMin] = useState<number>(0);
    const [maxValue, setMax] = useState<number>(10);

    const onMinus = useCallback(() => {
        if (minValue < count) {
            setCount(count - 1)
        }
    }, [count, minValue])

    const onPlus = useCallback(() => {
        if (maxValue > count) {
            setCount(count + 1)
        }
    }, [count, maxValue])

    useEffect(() => {
        if (onChange) onChange(count)
    }, [count])

    useEffect(() => {
        setCount(value)
    }, [value])

    useEffect(() => {
        setMin(min)
        setCount(prev => prev < min ? min : prev)
    }, [min])

    useEffect(() => {
        setMax(max)
        setCount(prev => prev > max ? max : prev)
    }, [max])

    return (
        <View
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                alignSelf: 'flex-start',
                ...style
            }}
        >
            <TouchableOpacity
                style={{
                    ...styles.btn,
                    backgroundColor: count === minValue ? colors.gray + 40 : colors.main,
                    ...buttonStyle
                }}
                onPress={onMinus}
                disabled={count === minValue}
            >
                <Image
                    source={minus_icon}
                    style={styles.icon}
                    resizeMode='contain'
                />
            </TouchableOpacity>
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

            <TouchableOpacity
                style={{
                    ...styles.btn,
                    backgroundColor: count === maxValue ? colors.gray + 40 : colors.main,
                    ...buttonStyle
                }}
                onPress={onPlus}
                disabled={count === maxValue}
            >
                <Image
                    source={plus_icon}
                    style={styles.icon}
                    resizeMode='contain'
                />
            </TouchableOpacity>
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