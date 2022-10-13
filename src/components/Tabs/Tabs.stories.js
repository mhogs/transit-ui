import * as React from 'react'
import { storiesOf } from '@storybook/react-native'
import MyTabView from '.'
import CenterView from '../CenterView'
import { Text, View } from 'react-native'

const tabRoutes = [
  { key: 'register', title: 'Sign Up' },
  { key: 'login', title: 'Sign In' },
]
const renderScene = (params) => {
  const { route } = params
  switch (route.key) {
    case 'login':
      return (
        <CenterView>
          <Text>Login form component</Text>
        </CenterView>
      )
    case 'register':
      return (
        <CenterView>
          <Text>Register form component</Text>
        </CenterView>
      )
    default:
      return null
  }
}

storiesOf('MyTabView', module)
  .addDecorator((getStory) => (
    <View style={{ flex: 1, paddingVertical: 100 }}>{getStory()}</View>
  ))
  .add('default', () => (
    <MyTabView
      enabledSwip={false}
      tabRoutes={tabRoutes}
      sceneRendrer={renderScene}
    />
  ))
