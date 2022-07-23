import React, { memo, useEffect, useState } from 'react'
import { Text, ScrollView } from 'react-native'
import { Button } from 'logikey-ui'

const ButtonScreen = () => {
    const [isLoadingMain, setLoadingMain] = useState(false);
    const [isLoadingBordered, setLoadingBordered] = useState(false);

    useEffect(() => {
        if (isLoadingMain) setTimeout(() => setLoadingMain(false), 1000)
    }, [isLoadingMain])


    useEffect(() => {
        if (isLoadingBordered) setTimeout(() => setLoadingBordered(false), 1000)
    }, [isLoadingBordered])

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

            <Text style={{ marginBottom: 20 }}>This is how our Buttons looks like 🥳</Text>

            <Button
                text='main btn'
                onPress={() => console.log('Main')}
                style={{
                    marginBottom: 20
                }}
            />

            <Button
                text='bordered btn'
                onPress={() => console.log('bordered')}
                style={{
                    marginBottom: 20
                }}
                bordered
            />
            <Button
                text='main disabled btn'
                style={{
                    marginBottom: 20
                }}
                disabled
            />

            <Button
                text='bordered disabled btn'
                style={{
                    marginBottom: 20
                }}
                bordered
                disabled
            />
            <Button
                text='main loading btn (press me)'
                onPress={() => setLoadingMain(true)}
                style={{
                    marginBottom: 20
                }}
                loading={isLoadingMain}
            />

            <Button
                text='bordered loading btn (press me)'
                onPress={() => setLoadingBordered(true)}
                bordered
                loading={isLoadingBordered}
            />

        </ScrollView>
    )
}

export default memo(ButtonScreen)