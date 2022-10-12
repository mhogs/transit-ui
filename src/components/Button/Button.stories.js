import * as React from 'react'
import { storiesOf } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'
import Button from '.'
import CenterView from '../CenterView'

export const actions = {
  onPress: action('onPress'),
}
storiesOf('Button', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('default', () => <Button text='Press me' {...actions} />)
  .add('disabled', () => <Button text="I'm disabled" disabled {...actions} />)
