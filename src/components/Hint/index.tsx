import React, { memo, useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import { colors } from '../../themes';
import info_icon from './../../assets/images/info.png'

type Props = {
    text: string,
    style?: any,
    textStyle?: any,
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
                lineHeight: 0,
                ...textStyle
            }}
        >{text}</Text>
    </View>
}

export default memo(Hint)