import React, { memo, useCallback, useEffect, useState } from 'react'
import { Image, ImageSourcePropType, Text, View } from 'react-native'
import { colors } from '../../themes';
import Box from '../Box';

type DataProps = {
    id: number
    title: string
    sub_title?: string,
    image_src: ImageSourcePropType
}

type Props = {
    data: Array<DataProps>
    onChange?: CallableFunction
    value?: Array<number>
    disabled?: boolean
}

const ItemSelector = ({ data, onChange, disabled }: Props) => {
    const [selections, setSelections] = useState<Array<DataProps>>([]);
    const [_data, setData] = useState<Array<DataProps>>([]);
    const [isDisabled, setDisabled] = useState<boolean>();

    useEffect(() => {
        setDisabled(!!disabled)
    }, [disabled])

    useEffect(() => {
        setData(data)
    }, [data])

    useEffect(() => {
        if (onChange) onChange(selections)
    }, [selections, onChange])

    const onSelect = useCallback((isSelected: boolean, item: DataProps) => {
        setSelections(prev => {
            if (isSelected)
                return [...prev, item]
            return prev.filter(itm => itm.id !== item.id)
        })
    }, [])

    return (
        <View
            style={{
                flexWrap: 'wrap',
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}>
            {_data.map((item) => {
                const { id, title, sub_title, image_src } = item;
                return <View
                    key={id}
                    style={{
                        alignItems: 'center',
                        width: 100,
                        marginBottom: 10
                    }}
                >
                    <Box
                        selectable
                        style={{
                            width: 60,
                            height: 60,
                            alignItems: 'center',
                            marginBottom: 10
                        }}
                        onChange={(isSelected: boolean) => onSelect(isSelected, item)}
                        disabled={isDisabled}
                    >
                        <Image
                            style={{
                                width: 35,
                                height: 35
                            }}
                            source={image_src}
                        />
                    </Box>
                    <Text
                        style={{
                            fontSize: 15,
                            color: colors.black_text
                        }}
                        numberOfLines={1}
                    >{title}</Text>
                    {!!sub_title &&
                        <Text
                            style={{
                                fontSize: 12,
                                color: colors.gray,
                                marginTop: 3
                            }}
                            numberOfLines={1}
                        >{sub_title}</Text>
                    }
                </View>
            }
            )}
        </View>
    )
}

export default memo(ItemSelector);