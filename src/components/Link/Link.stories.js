import * as React from 'react'
import { storiesOf } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'
import Link from '.'
import CenterView from '../CenterView'

export const actions = {
  onPress: action('onPress'),
}
storiesOf('Link', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('default', () => <Link text='Default Link' {...actions} />)
  .add('disabled', () => <Link disabled text='Disabled Link' {...actions} />)
