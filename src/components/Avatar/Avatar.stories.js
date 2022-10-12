import * as React from 'react'
import { storiesOf } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'
import Avatar from '.'
import { colors } from '../../themes'
import CenterView from '../CenterView'

export const actions = {
  onPress: action('onPress'),
}
storiesOf('Avatar', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('default', () => <Avatar {...actions} />)
  .add('success', () => (
    <Avatar backgroundColor={colors.success} {...actions} />
  ))
