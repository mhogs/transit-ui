import React, { } from 'react'
import { ScrollView } from 'react-native'
import { Link, OptionsGroup } from 'logikey-ui'

const Home = ({ navigation }: { navigation?: any }) => {


  return <ScrollView
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
    <OptionsGroup />
    {[
      { name: 'Box' },
      { name: 'Button' },
      { name: 'Flag' },
      { name: 'CheckBox' },
      { name: 'Option' },
      { name: 'Link' },
      { name: 'Message' }
    ].map((item, idx) => <Link
      key={idx.toString()}
      text={item.name}
      onPress={() => navigation.navigate(item.name)}
      style={{
        marginBottom: 15
      }}
    />)}


  </ScrollView>
}

export default Home
