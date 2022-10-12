import * as React from 'react'
import { storiesOf } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'
import Option from '.'
import CenterView from '../CenterView'

export const actions = {
  onChange: action('onChange'),
}
storiesOf('Option', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('default', () => <Option text='Default Message' {...actions} />)
  .add('disabled', () => (
    <Option disabled type='success' text='Disabled option' {...actions} />
  ))
