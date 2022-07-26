import React, { memo, useCallback, useEffect, useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors } from './../../themes'
import plus_icon from './../../assets/images/plus.png'
import minus_icon from './../../assets/images/minus.png'

type Props = {
    value?: number
    min?: number
    max?: number
    onChange?: CallableFunction
}

const Counter = (({ value = 0, min = 0, max = 10, onChange }: Props) => {
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
                alignSelf: 'flex-start'
            }}
        >
            <TouchableOpacity
                style={{
                    ...styles.btn,
                    backgroundColor: count === minValue ? colors.gray + 40 : colors.main,
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
            <View style={{ width: 50, alignItems: 'center' }}>
                <Text style={{
                    fontSize: 16,
                    fontWeight: 'bold'
                }}>{count}</Text>
            </View>

            <TouchableOpacity
                style={{
                    ...styles.btn,
                    backgroundColor: count === maxValue ? colors.gray + 40 : colors.main,
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