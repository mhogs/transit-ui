import React, { memo } from 'react'
import { Text, ScrollView } from 'react-native'
import { Hint } from 'logikey-ui'

const HintScreen = () => {

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
            <Text style={{ marginBottom: 20 }}>This is how our Hints looks like 🥳</Text>

            <Hint
                text='Test our hint with icon'
                style={{
                    marginBottom: 10
                }}
            />

            <Hint
                text='Test our hint without icon'
                style={{
                    marginBottom: 10
                }}
                hasIcon={false}
            />
        </ScrollView>
    )
}

export default memo(HintScreen)