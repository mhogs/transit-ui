import * as React from 'react'
import { storiesOf } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'
import DriverCard from '.'
import CenterView from '../CenterView'

export const actions = {
  onChange: action('onChange'),
}
storiesOf('DriverCard', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('default', () => <DriverCard {...actions} />)
