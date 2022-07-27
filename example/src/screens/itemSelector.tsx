import React, { memo, useCallback, useEffect, useState } from 'react'
import { Image, ScrollView, Text, View } from 'react-native'
import { ItemSelector, theams } from 'logikey-ui';

const ItemSelectorScreen = () => {
    const [selections, setSelections] = useState<Array<any>>([]);

    useEffect(() => {
        console.log(selections)
    }, [selections])

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
            <Text style={{ marginBottom: 20, color: theams.colors.black_text }}>
                This is how our ItemSelector looks like 🥳
            </Text>
            <ItemSelector
                data={[
                    {
                        id: 1,
                        title: 'title 1',
                        image_src: require('./../images/calendar.png')
                    },
                    {
                        id: 2,
                        title: 'title 2',
                        image_src: require('./../images/calendar.png'),
                        sub_title:'sub title'
                    },
                    {
                        id: 3,
                        title: 'title 3',
                        image_src: require('./../images/calendar.png')
                    },
                    {
                        id: 4,
                        title: 'title 4',
                        image_src: require('./../images/calendar.png')
                    }
                ]}
                onChange={setSelections}
                value={selections}
            />
        </ScrollView>
    )
}

export default memo(ItemSelectorScreen);