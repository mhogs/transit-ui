import React, { memo, useState } from 'react'
import { Text, ScrollView } from 'react-native'
import { OptionsGroup } from 'logikey-ui'

const OptionsGroupScreen = () => {
    const [value, setValue] = useState<number>();

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
            <Text style={{ marginBottom: 20 }}>This is how our Options Group looks like 🥳</Text>

            <OptionsGroup
                title='This our OptionsGroup'
                value={value}
                onSelect={setValue}
                options={[
                    {
                        id: 1,
                        text: 'This is the first option',
                        extraText: '110$'
                    },
                    {
                        id: 2,
                        text: 'This is the second option',
                        extraText: '120$'
                    },
                    {
                        id: 3,
                        text: 'This is the last option'
                    }
                ]}
            />

        </ScrollView>
    )
}

export default memo(OptionsGroupScreen)