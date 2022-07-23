import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { Button, Box, Flag, CheckBox } from 'logikey-ui'
import Option from './Option';

const App = () => {
  const [isLoadingMain, setLoadingMain] = useState(false);
  const [isLoadingBordered, setLoadingBordered] = useState(false);

  const [isChecked, setChecked] = useState<boolean>();

  useEffect(() => {
    if (isLoadingMain) setTimeout(() => setLoadingMain(false), 1000)
  }, [isLoadingMain])


  useEffect(() => {
    if (isLoadingBordered) setTimeout(() => setLoadingBordered(false), 1000)
  }, [isLoadingBordered])

  return <ScrollView
    style={{
      flex: 1
    }}
    contentContainerStyle={{
      flexGrow: 1,
      paddingHorizontal: 16,
      paddingVertical: 50
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
    >
      <Text style={{ marginBottom: 20 }}>This is how our Options looks like 🥳</Text>
      <Option
        text='This the option'
        style={{
          marginBottom: 10
        }}
        value={isChecked}
        onChange={setChecked}
      />
      <Option
        text='This the option'
        extraText='120$'
        style={{
          marginBottom: 10
        }}
      />
      <Option
        text='This the disabled option'
        extraText='120$'
        disabled
      />
    </Box>
    <Box
      style={{
        marginBottom: 20
      }}
    >
      <Text style={{ marginBottom: 20 }}>This is how our Flags looks like 🥳</Text>

      <View style={{ flexDirection: 'row' }}>
        <Flag
          text='done'
        />
        <Flag
          type='waiting'
          text='in progress'
          style={{
            marginHorizontal: 10,
          }}
        />
        <Flag
          text='canceled'
          type='canceled'
        />
      </View>

      <View style={{ flexDirection: 'row', marginTop: 10 }}>
        <Flag
          text='done'
          hasBackground
        />
        <Flag
          type='waiting'
          hasBackground
          text='in progress'
          style={{
            marginHorizontal: 10,
          }}
        />
        <Flag
          text='canceled'
          hasBackground
          type='canceled'
        />
      </View>

    </Box>

    <Box
      style={{
        marginBottom: 20
      }}
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
    </Box>

    <Box
      style={{
        marginBottom: 20
      }}
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
    </Box>
  </ScrollView>
}

export default App
