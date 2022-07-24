import React, { memo } from 'react'
import { Image, Text, View } from 'react-native'
import cube from './../../assets/images/cubes.png'

const OptionsGroup = () => {

    return (
        <View>
            <Text>Test Image</Text>
            <Image
                source={cube}
                style={{
                    width: 20,
                    height: 20
                }}
            />
        </View>
    )
}

export default memo(OptionsGroup)