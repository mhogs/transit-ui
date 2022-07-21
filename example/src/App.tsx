import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { Button, Card } from 'logikey-ui'

const App = () => {
  const [isLoadingMain, setLoadingMain] = useState(false);
  const [isLoadingBordered, setLoadingBordered] = useState(false);

  useEffect(() => {
    if (isLoadingMain) setTimeout(() => setLoadingMain(false), 1000)
  }, [isLoadingMain])


  useEffect(() => {
    if (isLoadingBordered) setTimeout(() => setLoadingBordered(false), 1000)
  }, [isLoadingBordered])

  return <View
    style={{
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 16
    }}
  >

    <Card
      style={{
        marginBottom: 20
      }}
    >
      <Text>This is how our card looks like 🥳</Text>
    </Card>

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
  </View>
}

export default App
