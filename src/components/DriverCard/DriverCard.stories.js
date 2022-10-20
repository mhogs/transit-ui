import * as React from 'react'
import { storiesOf } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'
import DriverCard from '.'
import CenterView from '../CenterView'
import { Driver } from './types'

const driver = {
  id: "123456",
  createdAt: 1624757312752,
  firstName: "Driver",
  lastName: "Logi",
  isOnline: true,
  approved: true,
  mobile: "0650670964",
  email: "driver@gmail.com",
  bankInfo: 'Boalem - 12 - 65778',
  walletBalance: 3400.34,
  booking: 34,
  rating: 3.5,
  paymentStatus: 'done',
  paymentStatusText: 'Payment Before 01 Nov'
}

export const actions = {
  onChange: action('onChange'),
}
storiesOf('DriverCard', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('default', () => <DriverCard {...driver} {...actions} />)
