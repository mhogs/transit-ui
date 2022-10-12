import { View, ViewStyle, Image } from 'react-native'
import React, { memo } from 'react'
import colors from '../../themes/colors';
import { checked_icon, edit_icon } from '../../assets';

type props = {
  editable?: boolean,
  selectable?: boolean,
  selected: boolean,
  size: number,
  shape: 'circle' | 'rectangle',
  style?: ViewStyle,
}

const Content = ({ editable, selectable, selected, size, shape, style }: props) => {

  if (editable || (selectable && selected))
    return (
      <View
        style={{
          width: size,
          height: size,
          borderRadius: shape == 'rectangle' ? size / 5 : size,
          backgroundColor: selectable ? colors.main + 'bb' : '#0007',
          alignItems: 'center',
          justifyContent: 'center',
          margin: 5,
          ...style
        }}
      >

        {(selectable && selected) ?
          <Image
            style={{
              width: size / 3,
              height: size / 3,
              tintColor: "white"
            }}
            source={checked_icon}
          />
          :
          <Image
            style={{
              width: size / 3,
              height: size / 3,
              tintColor: "white"
            }}
            source={edit_icon}
          />
        }

      </View>
    )

  return null
}

export default memo(Content)