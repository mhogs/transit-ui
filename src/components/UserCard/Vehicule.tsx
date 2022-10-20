import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { truck_icon } from '../../assets'
import { usePlatform } from '../../hooks'
import { colors } from '../../themes'
import { VehicleType } from './types'

type VehiculeProps = {
    data?: VehicleType & { licenceImage?: string }
}
const Vehicule = (props: VehiculeProps) => {
    const platform = usePlatform()

    if (platform === "native")
        return (
            <View style={{ paddingHorizontal: 6, paddingTop: 12 }}>
                <View style={nativeStyles.container}>
                    <View style={nativeStyles.typeContainer}>
                        <Text style={nativeStyles.typeText}>
                            Truck
                        </Text>
                        <Image source={truck_icon} style={{ width: 34, height: 34, marginTop: 6 }} />
                    </View>
                    <View style={nativeStyles.infoscontainer} >
                        <View>
                            <Text style={nativeStyles.infoKeyText}>
                                brand / mark
                            </Text>
                            <Text style={nativeStyles.infoValueText}>
                                Volvo
                            </Text>
                        </View>
                        <View style={{ marginTop: 4 }}>
                            <Text style={nativeStyles.infoKeyText}>
                                Model
                            </Text>
                            <Text style={nativeStyles.infoValueText}>
                                2000
                            </Text>
                        </View>
                        <View style={{ marginTop: 4 }}>
                            <Text style={nativeStyles.infoKeyText}>
                                Plate number
                            </Text>
                            <Text style={nativeStyles.infoValueText}>
                                46-326-87
                            </Text>
                        </View>

                    </View>
                    <View style={nativeStyles.licenceContainer}>
                        <Text style={nativeStyles.infoKeyText}>
                            License image
                        </Text>
                        <Image source={{ uri: props.data?.licenceImage }} style={{ width: 94, height: 54, marginTop: 5 }} />
                    </View>
                </View>
            </View>

        )
    return (
        <div>
            Web vehicule
        </div>
    )
}

export default React.memo(Vehicule)


const nativeStyles = StyleSheet.create({
    container: {
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 5,
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
        backgroundColor: colors.bg_rimary,
        justifyContent: "space-between"
    },
    typeContainer: {

    },
    typeText: {
        fontSize: 14,
        fontWeight: "700",
        color: "#fff"
    },

    infoscontainer: {

    },
    infoKeyText: {
        fontSize: 12,
        fontWeight: "500",
        color: "#fff"
    },
    infoValueText: {
        fontSize: 10,
        fontWeight: "300",
        color: "#fff"
    },
    licenceContainer: {

    }

})