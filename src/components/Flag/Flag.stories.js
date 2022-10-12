import * as React from 'react'
import { storiesOf } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'
import Flag from '.'
import CenterView from '../CenterView'

storiesOf('Flag', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('default', () => <Flag text=' Default Flag' />)
  .add('success', () => <Flag type='success' text=' success Flag' />)
  .add('with background', () => <Flag hasBackground text=' Flag with BG' />)
