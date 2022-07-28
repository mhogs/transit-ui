import React, { memo, useEffect, useState } from 'react'
import { ScrollView, Text } from 'react-native'
import { Counter, theams } from 'logikey-ui'

const CounterScreen = () => {
    const [count, setCount] = useState<number>(2);

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
                value={count}
                onChange={setCount}
            />
            <Counter
                min={2}
                max={19}
                text='USD'
                style={{
                    marginVertical: 10
                }}
            />
            <Counter
                min={12}
                max={18}
                text='$'
                disabled
            />
        </ScrollView>
    )
}



export default memo(CounterScreen);