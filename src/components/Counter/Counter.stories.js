import * as React from 'react'
import { storiesOf } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'
import Counter from '.'
import CenterView from '../CenterView'

export const actions = {
  onPress: action('onPress'),
}
storiesOf('Counter', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('default', () => <Counter text=' Counter' {...actions} />)
