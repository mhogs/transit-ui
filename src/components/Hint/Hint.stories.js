import * as React from 'react'
import { storiesOf } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'
import Hint from '.'
import CenterView from '../CenterView'

storiesOf('Hint', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('default', () => <Hint text=' Default Hint' />)
  .add('with icon', () => <Hint hasIcon text=' Hint with icon' />)
