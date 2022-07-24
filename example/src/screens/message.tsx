import React, { memo } from 'react'
import { Text, ScrollView } from 'react-native'
import { Message } from 'logikey-ui'

const MessageScreen = () => {

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
            <Text style={{ marginBottom: 20 }}>This is how our Messages looks like 🥳</Text>
            <Message
                text="This's our message box with long text as much as possable to test how more than single line will looks like"
                style={{
                    marginBottom: 10
                }}
            />

            <Message
                text="This's our message box"
                style={{
                    marginBottom: 10
                }}
            />
            <Message
                text="This's our message box"
                style={{
                    marginBottom: 10
                }}
                type='warning'
            />
            <Message
                text="This's our message box"
                style={{
                    marginBottom: 20
                }}
                type='error'
            />

            <Message
                text="This's our message box without a background color"
                style={{
                    marginBottom: 10
                }}
                hasBackground={false}
            />
            <Message
                text="This's our message box without a background color"
                style={{
                    marginBottom: 10
                }}
                type='warning'
                hasBackground={false}
            />
            <Message
                text="This's our message box without a background color"
                style={{
                    marginBottom: 10
                }}
                type='error'
                hasBackground={false}
            />

            <Message
                text='Test the message box with custom color'
                color='#3498db'
                style={{
                    marginVertical: 10
                }}
            />
            <Message
                text='Test the message box with custom color and without a background'
                color='#3498db'
                hasBackground={false}
            />

        </ScrollView>
    )
}

export default memo(MessageScreen)