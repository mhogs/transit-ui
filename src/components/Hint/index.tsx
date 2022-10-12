import React, { memo, useEffect, useState } from 'react';
import { View, Text, Image, ViewStyle, TextStyle } from 'react-native';
import { info_icon } from '../../assets';
import { colors } from '../../themes';

type Props = {
    text: string
    style?: ViewStyle
    textStyle?: TextStyle
    hasIcon?: boolean
}

const Hint = ({ text, style, textStyle, hasIcon = true }: Props) => {
    const [isHasIcon, setHasIcon] = useState<boolean>();

    useEffect(() => {
        setHasIcon(!!hasIcon)
    }, [hasIcon])

    return <View
        style={{
            flexDirection: 'row',
            alignItems: 'center',
            ...style
        }}
    >
        {isHasIcon && <>
            <Image
                source={info_icon}
                style={{
                    width: 14,
                    height: 14,
                    tintColor: colors.gray
                }}
            />
            <View style={{ width: 5 }} />
        </>}

        <Text
            style={{
                color: colors.gray,
                fontSize: 12,
                lineHeight: 14,
                ...textStyle
            }}
        >{text}</Text>
    </View>
}

export default memo(Hint)