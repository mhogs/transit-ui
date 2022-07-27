import React, { memo } from 'react'
import { ScrollView } from 'react-native'
import { Link } from 'logikey-ui'

const Home = ({ navigation }: { navigation?: any }) => {

  return (
    <ScrollView
      style={{
        flex: 1
      }}
      contentContainerStyle={{
        flexGrow: 1,
        paddingHorizontal: 16,
        paddingVertical: 20
      }}
      showsVerticalScrollIndicator={false}
    >
      {[
        { name: 'Box' },
        { name: 'Button' },
        { name: 'Flag' },
        { name: 'CheckBox' },
        { name: 'Option' },
        { name: 'OptionsGroup' },
        { name: 'Link' },
        { name: 'Message' },
        { name: 'Hint' },
        { name: 'Counter' },
        { name: 'Avatar' },
        { name: 'ItemSelector' }
      ].map((item, idx) => <Link
        key={idx.toString()}
        text={item.name}
        onPress={() => navigation.navigate(item.name)}
        style={{
          marginBottom: 15
        }}
      />)}
    </ScrollView>
  )
}

export default memo(Home);
