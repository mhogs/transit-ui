import React, { memo } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { Flag, theams } from 'logikey-ui'

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
            <Text style={{ marginBottom: 20, color: theams.colors.black_text }}>This is how our Flags looks like 🥳</Text>

            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
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
                <Flag
                    text='Custom color'
                    color='#3498db'
                    style={{
                        marginTop: 10
                    }}
                />
            </View>

            <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 30 }}>
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
                <Flag
                    text='Custom color'
                    color='#3498db'
                    style={{
                        marginTop: 10
                    }}
                    hasBackground
                />
            </View>
        </ScrollView>
    )
}

export default memo(FlagScreen)