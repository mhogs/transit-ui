import * as React from 'react'
import { storiesOf } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'
import UserCard from '.'
import CenterView from '../CenterView'

export const actions = {
  onChange: action('onChange'),
}
storiesOf('UserCard', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('user', () => <UserCard user={default_user} {...actions} />)
  .add('disabled user', () => <UserCard user={disabled_user} {...actions} />)
  .add('Mvp user', () => <UserCard user={mvp_user} {...actions} />)
  .add('online_driver', () => <UserCard user={online_driver} {...actions} />)
  .add('offline_driver', () => <UserCard user={offline_driver} {...actions} />)

const default_user = {
  id: 'fhgjjdjodoj1452d',
  createdAt: 1265435,
  firstName: 'Hemza',
  lastName: 'Talha',
  mobile: '+213799085706',
  email: 'hemzatalha@gmail.com',
  usertype: 'user',
  referralId: '1452fgg455g12g',
  approved: true,
  walletBalance: 15200,
  loginType: 'google',
  pushToken: 'dsdlifhiz65464zefze654f6zef84z6ef6c1z6ef64f9z8ef46fz6fe4ze',
  userPlatform: 'mobile',
  queue: true,
  fleetadmin: 'admin',
  createdByAdmin: false,
  driverUpdateRequest: {}, //todo
  requestToBeDriver: true,
  authorized: false,
  lang: {
    langLocale: 'ar',
    dateLocale: '20-10-2022',
  },
}

const disabled_user = {
  ...default_user,
  approved: false,
}
const mvp_user = {
  ...default_user,
  usertype: 'mvp_user',
}
const online_driver = {
  ...default_user,
  queue: true,
  usertype: 'driver',
}
const offline_driver = {
  ...default_user,
  queue: false,
  usertype: 'driver',
}
