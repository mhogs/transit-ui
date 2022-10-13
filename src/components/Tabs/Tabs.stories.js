import * as React from 'react'
import { storiesOf } from '@storybook/react-native'
import Tabs from '.'
import CenterView from '../CenterView'
import { Text, View, StyleSheet } from 'react-native'
import { colors } from '../../themes'
const authRoutes = [
  { key: 'register', title: 'Sign Up' },
  { key: 'login', title: 'Sign In' },
]
const renderAuthScene = (params) => {
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

const orderstatusRoutes = [
  { key: 'all', title: 'All' },
  { key: 'draft', title: 'Draft' },
  { key: 'pending', title: 'Pending' },
  { key: 'on_progress', title: 'On Progress' },
  { key: 'delivered', title: 'Delivered' },
]

const renderOrderStatusScene = (params) => {
  const { route } = params
  switch (route.key) {
    case 'all':
      return (
        <CenterView>
          <Text>All</Text>
        </CenterView>
      )
    case 'draft':
      return (
        <CenterView>
          <Text>Only in Draft</Text>
        </CenterView>
      )
    case 'pending':
      return (
        <CenterView>
          <Text>Only Pending</Text>
        </CenterView>
      )
    case 'on_progress':
      return (
        <CenterView>
          <Text>Only On progress</Text>
        </CenterView>
      )
    case 'delivered':
      return (
        <CenterView>
          <Text>Only Delivered</Text>
        </CenterView>
      )
    default:
      return null
  }
}

storiesOf('Tabs', module)
  .addDecorator((getStory) => (
    <View style={{ flex: 1, paddingVertical: 100 }}>{getStory()}</View>
  ))
  .add('default', () => (
    <Tabs
      enabledSwip={false}
      tabRoutes={authRoutes}
      sceneRendrer={renderAuthScene}
    />
  ))
  .add('swipable', () => (
    <Tabs
      enabledSwip={true}
      tabRoutes={authRoutes}
      sceneRendrer={renderAuthScene}
    />
  ))
  .add('scrollable', () => (
    <Tabs
      enabledSwip={true}
      scrollable
      tabRoutes={orderstatusRoutes}
      sceneRendrer={renderOrderStatusScene}
      tapBarstyle={styles.tapBar}
      tabItemFocusedStyle={styles.tabItemFocused}
      tabItemNotFocusedStyle={styles.tabItemNotFocused}
      focusedLabelstyle={styles.focusedLabel}
      nonFocusedLabelStyle={styles.nonFocusedLabel}
    />
  ))

const styles = StyleSheet.create({
  tapBar: {
    height: 28,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  tabItemFocused: {
    borderRadius: 25,
    paddingHorizontal: 17,
    paddingVertical: 6,
    height: '100%',
    backgroundColor: colors.main,
    justifyContent: 'center',
    marginRight: 10,
  },
  tabItemNotFocused: {
    borderRadius: 25,
    paddingHorizontal: 17,
    paddingVertical: 6,
    height: '100%',
    backgroundColor: colors.white,
    borderColor: colors.white,
    borderWidth: 0.5,
    justifyContent: 'center',
    marginRight: 10,
  },
  focusedLabel: {
    color: colors.white,
    textAlign: 'center',
  },
  nonFocusedLabel: {
    color: colors.gray,
    textAlign: 'center',
  },
})
