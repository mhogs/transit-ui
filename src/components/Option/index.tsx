import React, { memo, useState, useCallback, useEffect } from 'react'
import { Image, TouchableOpacity, Text, View } from 'react-native'
import { colors } from '../../themes'
import checked_icon from './../../assets/images/checked.png'

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
                borderColor: isChecked ? colors.main : colors.gray,
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: isDisabled ? colors.gray + 10 : colors.transparent,
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
                    borderColor: isChecked ? colors.main : colors.gray,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                {!!isChecked &&
                    <Image
                        source={checked_icon}
                        style={{
                            width: 8,
                            height: 8,
                            tintColor: colors.main
                        }}
                        resizeMode='contain'
                    />
                }
            </View>
            <View
                style={{
                    width: 10
                }}
            />
            <Text
                style={{
                    fontSize: 12,
                    fontWeight: isChecked ? 'bold' : '300',
                    flex: 1,
                    color: isDisabled ? colors.gray : colors.black_text
                }}
                numberOfLines={1}
            >{text}</Text>
            {!!extraText &&
                <Text
                    style={{
                        fontSize: 12,
                        fontWeight: isChecked ? 'bold' : '300',
                        color: isDisabled ? colors.gray : colors.black_text
                    }}
                >{extraText}</Text>
            }
        </TouchableOpacity>
    )
}

export default memo(Option)