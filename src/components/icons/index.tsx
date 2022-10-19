import React from 'react'
import { usePlatform } from '../../hooks'
import { Image } from 'react-native'
import { edit_icon } from '../../assets'

export const EditIcon = () => {
    const platform = usePlatform()
    switch (platform) {

        case "native":
            return <Image
                source={edit_icon}
                fadeDuration={0}
                style={{ width: 24, height: 24 }}
            />

        case 'web':
            return (
                <></>
            )

        default:
            return <></>
    }
}
