import React, { memo, useCallback, useEffect, useState } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { Counter, theams } from 'logikey-ui'

const CounterScreen = () => {
    const [count, setCount] = useState<number>(0);

    useEffect(() => {
        console.log(count)
    }, [count])

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
            <Text style={{ marginBottom: 20, color: theams.colors.black_text }}>This is how our Counters looks like 🥳</Text>

            <Counter
                min={2}
                max={19}
                value={count}
                onChange={setCount}
                style={{
                    marginBottom: 10
                }}
            />
            <Counter
                min={2}
                max={19}
                text='USD'
            />
        </ScrollView>
    )
}



export default memo(CounterScreen);