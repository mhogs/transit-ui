import React, { memo, useEffect, useState, useCallback } from 'react'
import { Text, View, ViewStyle } from 'react-native'
import { colors } from '../../themes'
import Option from '../Option'

type OptionProps = {
    id: number
    text: string
    extraText?: string
}

type Props = {
    title?: string
    options?: Array<OptionProps>
    value?: number
    onSelect?: CallableFunction,
    disabled?: boolean,
    style?: ViewStyle
}

const OptionsGroup = ({ title, options, value, onSelect, disabled, style }: Props) => {
    const [selcetedOption, setSelcetedOption] = useState<number>()
    const [isDisabled, setDisabled] = useState<boolean>();

    const onPress = useCallback((id: number | undefined) => {
        setSelcetedOption(id);
        if (onSelect) onSelect(id)
    }, [onSelect,])

    useEffect(() => {
        setSelcetedOption(value)
    }, [value])

    useEffect(() => {
        setDisabled(!!disabled)
    }, [disabled])

    return (
        <View style={{ ...style }}>
            <Text
                style={{
                    fontWeight: 'bold',
                    fontSize: 16,
                    color: colors.black_text,
                    marginBottom: 15
                }}>
                {title}
            </Text>
            {options?.map((item) => {
                const { id, text, extraText } = item;
                const isSelected = id === selcetedOption;

                return (
                    <Option
                        key={id.toString()}
                        text={text}
                        extraText={extraText}
                        style={{
                            marginBottom: 10
                        }}
                        value={isSelected}
                        onChange={(val: boolean) => onPress(val ? id : undefined)}
                        disabled={isDisabled}
                    />
                );
            })}
        </View>
    )
}

export default memo(OptionsGroup)