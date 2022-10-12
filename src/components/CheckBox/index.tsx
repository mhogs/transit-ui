import React, { memo, useCallback, useEffect, useState } from 'react'
import { Image, Text, Pressable, View, ViewStyle } from 'react-native'
import { colors } from '../../themes';
import checked_icon from './../../assets/images/checked.png'

type Props = {
    text?: string
    style?: ViewStyle
    value?: boolean
    onChange?: CallableFunction
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
            <Pressable
                style={{
                    width: 20,
                    height: 20,
                    borderWidth: .5,
                    borderColor: isChecked ? colors.main : colors.gray,
                    borderRadius: 3,
                    backgroundColor: isDisabled ? colors.gray + 30 : (isChecked ? colors.main : colors.transparent),
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                onPress={onPress}
                disabled={isDisabled}
            >
                {!!isChecked &&
                    <Image
                        source={checked_icon}
                        style={{
                            width: 8,
                            height: 8,
                            tintColor: '#fff'
                        }}
                        resizeMode='contain'
                    />
                }
            </Pressable>
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