import React, { memo } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { Flag } from 'logikey-ui'

const FlagScreen = () => {

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
            <Text style={{ marginBottom: 20 }}>This is how our Flags looks like 🥳</Text>

            <View style={{ flexDirection: 'row' }}>
                <Flag
                    text='done'
                />
                <Flag
                    type='waiting'
                    text='in progress'
                    style={{
                        marginHorizontal: 10,
                    }}
                />
                <Flag
                    text='canceled'
                    type='canceled'
                />
            </View>

            <View style={{ flexDirection: 'row', marginTop: 10 }}>
                <Flag
                    text='done'
                    hasBackground
                />
                <Flag
                    type='waiting'
                    hasBackground
                    text='in progress'
                    style={{
                        marginHorizontal: 10,
                    }}
                />
                <Flag
                    text='canceled'
                    hasBackground
                    type='canceled'
                />
            </View>
        </ScrollView>
    )
}

export default memo(FlagScreen)