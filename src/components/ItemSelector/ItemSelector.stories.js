import * as React from 'react'
import { storiesOf } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'
import ItemSelector from '.'
import CenterView from '../CenterView'
import { minus_icon, plus_icon } from '../../assets'
const data = [
  {
    id: 1,
    title: 'title 01',
    sub_title: 'sub title 01',
    image_src: plus_icon,
  },
  {
    id: 2,
    title: 'title 02',
    sub_title: 'sub title 02',
    image_src: minus_icon,
  },
  {
    id: 3,
    title: 'title 03',
    sub_title: 'sub title 03',
    image_src: plus_icon,
  },
  {
    id: 4,
    title: 'title 04',
    sub_title: 'sub title 04',
    image_src: minus_icon,
  },
]
export const actions = {
  onChange: action('onChange'),
}
storiesOf('ItemSelector', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('default', () => (
    <ItemSelector data={data} value={[1, 2, 3, 4]} {...actions} />
  ))
