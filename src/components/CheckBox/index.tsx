import React, { memo, useCallback, useEffect, useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

type Props = {
    text?: string,
    style?: any,
    value?: boolean,
    onChange?: CallableFunction,
    disabled?: boolean
}

const CheckBox = ({ style, text, value, onChange, disabled }: Props) => {
    const [isChecked, setChecked] = useState<boolean>();
    const [isDisabled, setDisabled] = useState<boolean>();

    const onPress = useCallback(() => {
        if (!isDisabled) {
            const NEW_VALUE = !isChecked;
            setChecked(NEW_VALUE);
            if (onChange) onChange(NEW_VALUE)
        }
    }, [isChecked, onChange, isDisabled])

    useEffect(() => {
        setChecked(value)
    }, [value])

    useEffect(() => {
        setDisabled(!!disabled)
    }, [disabled])

    return (
        <View
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                ...style
            }}
        >
            <TouchableOpacity
                style={{
                    width: 20,
                    height: 20,
                    borderWidth: .5,
                    borderColor: isChecked ? '#2E9D8D' : '#95a5a6',
                    borderRadius: 3,
                    backgroundColor: isDisabled ? '#95a5a630' : (isChecked ? '#2E9D8D' : '#00000000'),
                }}
                onPress={onPress}
                disabled={isDisabled}
            />
            {!!text && <>
                <View style={{ width: 10 }} />
                <Text
                    style={{
                        fontSize: 16,
                        color: isDisabled ? '#95a5a6' : '#171717'
                    }}
                    onPress={onPress}
                >
                    {text}
                </Text>
            </>}

        </View>
    )
};

export default memo(CheckBox);