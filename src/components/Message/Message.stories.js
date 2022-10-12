import * as React from 'react'
import { storiesOf } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'
import Message from '.'
import CenterView from '../CenterView'

storiesOf('Message', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('default', () => <Message text='Default Message' />)
  .add('warning msg', () => <Message type='warning' text='Warning Message' />)
  .add('with BG', () => (
    <Message hasBackground type='success' text='Success Message with bg' />
  ))
