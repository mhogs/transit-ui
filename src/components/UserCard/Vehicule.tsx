import React from 'react'
import { View, StyleSheet } from 'react-native'

const Vehicule = () => {
    return (
        <View style={nativeStyles.container}>
            <View >

            </View>
            <View>

            </View>
            <View>

            </View>
        </View>
    )
}

export default React.memo(Vehicule)


const nativeStyles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: "100%",
    }
})