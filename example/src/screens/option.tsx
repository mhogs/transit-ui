import React, { memo, useState } from 'react'
import { Text, ScrollView } from 'react-native'
import { Option } from 'logikey-ui'

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
            <Text style={{ marginBottom: 20 }}>This is how our Options looks like 🥳</Text>
            <Option
                text='This is the option'
                style={{
                    marginBottom: 10
                }}
                value={isChecked}
                onChange={setChecked}
            />
            <Option
                text='This is the option'
                extraText='120$'
                style={{
                    marginBottom: 10
                }}
            />
            <Option
                text='This is the disabled option'
                extraText='120$'
                disabled
            />

        </ScrollView>
    )
}

export default memo(CheckBoxScreen)