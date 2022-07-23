import React, { memo, useEffect, useState } from 'react'
import { View, Text, ScrollView, Image, Alert } from 'react-native'
import { Button, Box, Flag, CheckBox, Option, Link } from 'logikey-ui'

const BoxScreen = () => {

    return (
        <ScrollView
            style={{
                flex: 1,
            }}
            contentContainerStyle={{
                flexGrow: 1,
                paddingHorizontal: 16,
                paddingVertical: 20
            }}
            showsVerticalScrollIndicator={false}
        >
            <Box
                style={{
                    marginBottom: 20
                }}
            >
                <Text>This is how our box looks like 🥳</Text>
            </Box>
        </ScrollView>
    )
}

export default memo(BoxScreen)