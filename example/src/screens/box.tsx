import React, { memo, useState } from 'react'
import { Text, ScrollView } from 'react-native'
import { Box } from 'logikey-ui'

const BoxScreen = () => {
    const [isChecked, setChecked] = useState<boolean>();

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

            <Box
                style={{
                    marginBottom: 20
                }}
                selectable
                value={isChecked}
                onChange={setChecked}
            >
                <Text>A selectable box</Text>
            </Box>


            <Box
                style={{
                    marginBottom: 20
                }}
                selectable
                disabled
            >
                <Text>A selectable -disabled- box</Text>
            </Box>
        </ScrollView>
    )
}

export default memo(BoxScreen)