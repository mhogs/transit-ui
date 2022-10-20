import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { truck_icon } from '../../assets'
import { usePlatform } from '../../hooks'
import { colors } from '../../themes'
import { defaultFlex } from '../../themes/styles'
import { VehicleType } from './types'


const PLATFORM = usePlatform()


type VehiculeProps = {
    data?: VehicleType & { licenceImage?: string }
}
const Vehicule = (props: VehiculeProps) => {

    if (PLATFORM === "native")
        return (
            <View style={nativeStyles.root}>
                <View style={nativeStyles.container}>
                    <View style={nativeStyles.typeContainer}>
                        <Text style={nativeStyles.typeText}>
                            Truck
                        </Text>
                        <Image source={truck_icon} style={nativeStyles.vehiculeIcon} />
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
                        <Image source={{ uri: props.data?.licenceImage ?? "https://picsum.photos/200/300" }} style={nativeStyles.licenceImage} />
                    </View>
                </View>
            </View>
        )

    return (
        <div style={webStyles.root}>
            <div style={webStyles.container}>
                <div style={webStyles.typeContainer}>
                    <span style={webStyles.typeText}>
                        Truck
                    </span>
                    <img src={truck_icon as any} style={webStyles.vehiculeIcon} />
                </div>
                <div style={webStyles.infoscontainer} >
                    <div>
                        <span style={webStyles.infoKeyText}>
                            brand / mark
                        </span>
                        <span style={webStyles.infoValueText}>
                            Volvo
                        </span>
                    </div>
                    <div style={{ marginTop: 4 }}>
                        <span style={webStyles.infoKeyText}>
                            Model
                        </span>
                        <span style={webStyles.infoValueText}>
                            2000
                        </span>
                    </div>
                    <div style={{ marginTop: 4 }}>
                        <span style={webStyles.infoKeyText}>
                            Plate number
                        </span>
                        <span style={webStyles.infoValueText}>
                            46-326-87
                        </span>
                    </div>
                </div>
                <div style={webStyles.licenceContainer}>
                    <span style={webStyles.infoKeyText}>
                        License image
                    </span>
                    <img
                        src={props.data?.licenceImage ?? "https://picsum.photos/200/300"}
                        style={webStyles.licenceImage}
                    />
                </div>
            </div>
        </div>
    )
}

export default React.memo(Vehicule)


const nativeStyles = StyleSheet.create({
    root: {
        paddingLeft: includeUnitIfWeb(6),
        paddingRight: includeUnitIfWeb(6),
        paddingTop: includeUnitIfWeb(12)
    },
    container: {
        ...defaultFlex,
        paddingLeft: includeUnitIfWeb(12),
        paddingRight: includeUnitIfWeb(12),
        paddingTop: includeUnitIfWeb(6),
        paddingBottom: includeUnitIfWeb(6),
        borderRadius: includeUnitIfWeb(5),
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
        backgroundColor: colors.bg_rimary,
        justifyContent: "space-between"
    },
    vehiculeIcon: {
        width: includeUnitIfWeb(34),
        height: includeUnitIfWeb(34),
        marginTop: includeUnitIfWeb(6)
    },
    typeContainer: {
        ...defaultFlex,
    },
    typeText: {
        fontSize: includeUnitIfWeb(14),
        fontWeight: "700",
        color: "#fff"
    },

    infoscontainer: {
        ...defaultFlex,
    },
    infoKeyText: {
        fontSize: includeUnitIfWeb(12),
        fontWeight: "500",
        color: "#fff"
    },
    infoValueText: {
        fontSize: includeUnitIfWeb(10),
        fontWeight: "300",
        color: "#fff"
    },
    licenceContainer: {
        ...defaultFlex,
    },
    licenceImage: {
        width: includeUnitIfWeb(94),
        height: includeUnitIfWeb(54),
        marginTop: includeUnitIfWeb(5)
    }

})

const webStyles: any = {
    ...nativeStyles,
}

function includeUnitIfWeb(value: number): any {
    if (PLATFORM === "native") return value
    return `${value}px`
}