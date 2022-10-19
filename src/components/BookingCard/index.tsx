import { Image, Text, Pressable, View, ImageBackground, ImageSourcePropType, ViewStyle, StyleSheet } from 'react-native'
import React, { memo, useState } from 'react';
import { colors, common_styles } from '../../themes';
import { usePlatform } from '../../hooks';
import { propsType } from './types';



const BookingCard = (props: propsType) => {
    const { } = props
    const platform = usePlatform()

    if (platform === "native")
        return (
            <View style={nativeStyles.root}>

            </View>
        )

    return (
        <div style={webStyles.root}>

        </div>
    )
}

export default memo(BookingCard)



const webStyles = {
    root: {
        borderRadius: "5px",
        boxShadow: '#0px 0px 10px #C9C8C8',
    }
}

const nativeStyles = StyleSheet.create({
    root: {
        borderRadius: 5,
        shadowColor: '#C9C8C8',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0,
        shadowRadius: 5,
    }
})