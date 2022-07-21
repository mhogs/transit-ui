import React, { memo, useEffect, useState } from 'react'
import { TouchableOpacity, Text, View, ActivityIndicator, StyleProp } from 'react-native'

type Props = {
    text: string,
    onPress?: CallableFunction,
    loading?: boolean,
    style?: any,
    bordered?: boolean,
    disabled?: boolean
}

const Button = ({ text, onPress, loading, style, bordered, disabled }: Props) => {
    const [isLoading, setLoading] = useState(false);
    const [isBordered, setIsBordered] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);

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
                backgroundColor: isBordered ? 'transparent' : ((isLoading || isDisabled) ? '#95a5a620' : '#2E9D8D'),
                height: 55,
                borderRadius: 8,
                borderWidth: isBordered ? 1 : 0,
                borderColor: (isLoading || isDisabled) ? '#95a5a6' : '#2E9D8D',
                ...style
            }}
            onPress={() => {
                if (onPress)
                    onPress()
            }}
            disabled={isDisabled || isLoading}
        >
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                {
                    isLoading ?
                        <ActivityIndicator color={'#95a5a6'} />
                        :
                        <Text
                            style={{
                                fontSize: 17,
                                fontWeight: 'bold',
                                color: isDisabled ? '#95a5a6' : (isBordered ? '#2E9D8D' : '#fff'),
                                textTransform: 'capitalize'
                            }}
                            numberOfLines={1}
                        >
                            {text}
                        </Text>
                }

            </View>
        </TouchableOpacity>
    );
}

/**
 * 
 * loading - ...
 */
export default memo(Button);