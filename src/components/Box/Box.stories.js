import * as React from 'react'
import { storiesOf } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'
import Box from '.'
import CenterView from '../CenterView'
import { Text } from 'react-native'

export const actions = {
  onChange: action('onChange'),
}
storiesOf('Box', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('default', () => (
    <Box {...actions}>
      <Text>i am a child of box</Text>
    </Box>
  ))
  .add('disabled', () => (
    <Box disabled {...actions}>
      <Text>i am a child of disabled box</Text>
    </Box>
  ))
