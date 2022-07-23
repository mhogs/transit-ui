import React, { memo } from 'react'
import { Text, ScrollView, Alert } from 'react-native'
import { Link } from 'logikey-ui'

const LinkScreen = () => {

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
            <Text style={{ marginBottom: 20 }}>This is how our Links looks like 🥳</Text>
            <Link
                text='Press me'
                onPress={() => Alert.alert("Hi! I'm a Link")}
                style={{
                    marginBottom: 10
                }}
            />
            <Text>We cane use the <Link
                text='Link'
                onPress={() => Alert.alert("Hi! I'm a Link")}
            /> as pressable text</Text>

            <Text style={{ marginVertical: 10 }}>Sometimes we need a <Link
                text='a non pressable'
                disabled
            /> link</Text>

            <Text>And some custom <Link
                text='Color'
                onPress={() => Alert.alert("Hi! I'm a Link")}
                color='#9b59b6'
            /></Text>
        </ScrollView>
    )
}

export default memo(LinkScreen)