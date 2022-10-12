/* eslint-disable react-native/no-inline-styles */
import React, { memo, ReactNode, useEffect, useState, useCallback } from 'react'
import { Pressable, View, ViewStyle } from 'react-native'
import { colors, common_styles } from './../../themes'

type Props = {
  children?: ReactNode
  style?: ViewStyle,
  selectable?: boolean,
  value?: boolean,
  onChange?: CallableFunction,
  disabled?: boolean
}
const Box = ({ children, style, selectable, value, onChange, disabled }: Props) => {
  const [isSelectable, setisSelectable] = useState<boolean>();

  const [isChecked, setChecked] = useState<boolean>();
  const [isDisabled, setDisabled] = useState<boolean>();

  const onPress = useCallback(() => {
    if (!isDisabled) {
      const NEW_VALUE = !isChecked;
      setChecked(NEW_VALUE);
      if (onChange) onChange(NEW_VALUE)
    }
  }, [isChecked, onChange, isDisabled])

  useEffect(() => {
    setChecked(value)
  }, [value])

  useEffect(() => {
    setDisabled(!!disabled)
  }, [disabled])

  useEffect(() => {
    setisSelectable(!!selectable)
  }, [selectable])

  return (
    <View
      style={{
        ...(!isDisabled && common_styles.shadow),
        paddingHorizontal: isSelectable ? 0 : 16,
        paddingVertical: isSelectable ? 0 : 10,
        borderColor: isChecked ? colors.main : '#fff',
        backgroundColor: isDisabled ? colors.gray + 20 : '#fff',
        borderWidth: .5,
        marginVertical: 5,
        borderRadius: 8,
        ...style,
      }}
    >
      {
        isSelectable ?
          <Pressable
            style={{
              paddingHorizontal: 16,
              paddingVertical: 10,
              borderRadius: 8,
              flex: 1,
            }}
            onPress={onPress}
            disabled={isDisabled}
          >
            {children}
          </Pressable>
          :
          children
      }
    </View>
  )
}


export default memo(Box)
