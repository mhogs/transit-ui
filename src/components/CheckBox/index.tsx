import React, { memo, useCallback, useEffect, useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { colors } from '../../themes';

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
                    borderColor: isChecked ? colors.main : colors.gray,
                    borderRadius: 3,
                    backgroundColor: isDisabled ? colors.gray + 30 : (isChecked ? colors.main : colors.transparent),
                }}
                onPress={onPress}
                disabled={isDisabled}
            />
            {!!text && <>
                <View style={{ width: 10 }} />
                <Text
                    style={{
                        fontSize: 16,
                        color: isDisabled ? colors.gray : colors.black_text
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