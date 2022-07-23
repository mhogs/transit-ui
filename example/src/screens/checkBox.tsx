import React, { memo, useState } from 'react'
import { Text, ScrollView } from 'react-native'
import { CheckBox } from 'logikey-ui'

const CheckBoxScreen = () => {
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
            <Text style={{ marginBottom: 20 }}>This is how our CheckBoxs looks like 🥳</Text>
            <CheckBox
                style={{
                    marginBottom: 20
                }}
                value={isChecked}
                onChange={setChecked}
            />
            <CheckBox
                style={{
                    marginBottom: 20
                }}
                disabled
            />
            <CheckBox
                text='CheckBox with text'
                style={{
                    marginBottom: 20
                }}
            />

            <CheckBox
                text='CheckBox with text and disabled'
                style={{
                    marginBottom: 20
                }}
                disabled
            />
        </ScrollView>
    )
}

export default memo(CheckBoxScreen)