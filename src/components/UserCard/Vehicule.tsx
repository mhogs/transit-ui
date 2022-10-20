import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { truck_icon } from '../../assets'
import { colors } from '../../themes'
import { VehicleType } from './types'

type VehiculeProps = {
    data?: VehicleType & { licenceImage?: string }
}
const Vehicule = (props: VehiculeProps) => {

    //if (PLATFORM === "native")
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
                    <View style={nativeStyles.infoWraper}>
                        <Text style={nativeStyles.infoKeyText}>
                            brand / mark
                        </Text>
                        <Text style={nativeStyles.infoValueText}>
                            Volvo
                        </Text>
                    </View>
                    <View style={nativeStyles.infoWraper}>
                        <Text style={nativeStyles.infoKeyText}>
                            Model
                        </Text>
                        <Text style={nativeStyles.infoValueText}>
                            2000
                        </Text>
                    </View>
                    <View style={nativeStyles.infoWraper}>
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

    /*return (
        <div style={webStyles.root}>
            <div style={webStyles.container}>
                <div style={webStyles.typeContainer}>
                    <span style={webStyles.typeText}>
                        Truck
                    </span>
                    <img src={truck_icon as any} style={webStyles.vehiculeIcon} />
                </div>
                <div style={webStyles.infoscontainer} >
                    <div style={webStyles.infoWraper}>
                        <span style={webStyles.infoKeyText}>
                            brand / mark
                        </span>
                        <span style={webStyles.infoValueText}>
                            Volvo
                        </span>
                    </div>
                    <div style={webStyles.infoWraper}>
                        <span style={webStyles.infoKeyText}>
                            Model
                        </span>
                        <span style={webStyles.infoValueText}>
                            2000
                        </span>
                    </div>
                    <div style={webStyles.infoWraper}>
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
    )*/
}

export default React.memo(Vehicule)


const nativeStyles = StyleSheet.create({
    root: {
        paddingLeft: 6,
        paddingRight: 6,
        paddingTop: 12
    },
    container: {
        paddingLeft: 12,
        paddingRight: 12,
        paddingTop: 6,
        paddingBottom: 6,
        borderRadius: 5,
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
        backgroundColor: colors.bg_rimary,
        justifyContent: "space-between",
        shadowColor: colors.gray,
        elevation: 3
    },
    vehiculeIcon: {
        width: 34,
        height: 34,
        marginTop: 6
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
    infoWraper: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 4,
    },
    infoKeyText: {
        fontSize: 12,
        fontWeight: "500",
        color: "#fff"
    },
    infoValueText: {
        fontSize: 10,
        marginLeft: 6,
        fontWeight: "300",
        color: "#fff"
    },
    licenceContainer: {

    },
    licenceImage: {
        width: 94,
        height: 54,
        marginTop: 5
    }

})


