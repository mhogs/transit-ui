import * as React from 'react'
import { storiesOf } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'
import OptionsGroup from '.'
import CenterView from '../CenterView'

const options = [
  { id: 1, text: 'option 01', extraText: 'option 01 extra text' },
  { id: 2, text: 'option 02' },
  { id: 3, text: 'option 03', extraText: 'option 03 extra text' },
]
export const actions = {
  onChange: action('onChange'),
}

storiesOf('OptionsGroup', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('default', () => (
    <OptionsGroup
      options={options}
      title='Default options groupe'
      {...actions}
    />
  ))
  .add('disabled', () => (
    <OptionsGroup
      options={options}
      disabled
      title='Disabled options group'
      {...actions}
    />
  ))
