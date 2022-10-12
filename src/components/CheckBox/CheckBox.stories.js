import * as React from 'react'
import { storiesOf } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'
import CheckBox from '.'
import CenterView from '../CenterView'

export const actions = {
  onChange: action('onChange'),
}
storiesOf('CheckBox', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('default', () => <CheckBox text='Checkbox' {...actions} />)
  .add('checked', () => (
    <CheckBox value={true} text='I am checked' {...actions} />
  ))
