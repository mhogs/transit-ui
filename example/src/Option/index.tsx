import React, { memo, useState, useCallback, useEffect } from 'react'
import { TouchableOpacity, Text, View } from 'react-native'

type Props = {
    text?: string,
    extraText?: string,
    style?: any,
    value?: boolean,
    onChange?: CallableFunction,
    disabled?: boolean
}

const Option = ({ text, extraText, style, value, onChange, disabled }: Props) => {
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
        <TouchableOpacity
            style={{
                borderWidth: 1,
                paddingHorizontal: 12,
                paddingVertical: 8,
                borderRadius: 10,
                borderColor: isChecked ? '#2E9D8D' : '#95a5a6',
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: isDisabled ? '#95a5a620' : '#00000000',
                ...style
            }}
            onPress={onPress}
            disabled={isDisabled}
        >
            <View
                style={{
                    width: 16,
                    height: 16,
                    borderRadius: 8,
                    borderWidth: 1,
                    borderColor: isChecked ? '#2E9D8D' : '#95a5a6'
                }}
            />
            <View
                style={{
                    width: 10
                }}
            />
            <Text
                style={{
                    fontSize: 12,
                    fontWeight: isChecked ? 'bold' : '300',
                    flex: 1
                }}
                numberOfLines={1}
            >{text}</Text>
            {!!extraText &&
                <Text
                    style={{
                        fontSize: 12,
                        fontWeight: isChecked ? 'bold' : '300',
                    }}
                >{extraText}</Text>
            }
        </TouchableOpacity>
    )
}

export default memo(Option)