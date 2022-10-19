import { Image, Text, Pressable, View, ImageBackground, ImageSourcePropType, ViewStyle, StyleSheet } from 'react-native'
import React, { memo, useState } from 'react';
import { colors, common_styles } from '../../themes';
import { usePlatform } from '../../hooks';
import { Driver } from './types';
import { robot_icon, truck_icon } from '../../assets';



const DriverCard = (props: Driver) => {
    const { } = props
    const platform = usePlatform()

    if (platform === "native")
        return (
            <View style={nativeStyles.container}>
                <View style={nativeStyles.headerContainer}>
                    <Pressable onPress={()=>console.log("truck icon!")}>
                        <View style={nativeStyles.truckContainer}>
                        <Image
                            style={nativeStyles.truckIcon}
                            source={truck_icon}
                        />
                        </View>
                    </Pressable>
                </View>

                <View style={{height:5}}></View>

                <View style={nativeStyles.driverStatusContainer}>
                    <View style={nativeStyles.robotContainer}>
                        <Image
                            style={nativeStyles.robotIcon}
                            source={robot_icon}
                        />
                    </View>
                </View>

                <View style={{height:5}}></View>

                <View style={nativeStyles.driverInfoContainer}>
                    <View style={nativeStyles.idContainer}>
                        <Text style={nativeStyles.driverNameText}>Driver Logi</Text>
                        <View style={[nativeStyles.statusIndicator, {backgroundColor: true ? colors.bg_rimary : colors.gray}]}></View>
                    </View>
                    <Text style={[nativeStyles.driverAccountStatusText, { color: true ? colors.main : colors.canceled }]}>Account Approved</Text>
                    <View style={nativeStyles.ratingContainer}>
                        <Text>4.5</Text>
                        <Text>*</Text>
                    </View>
                </View>
            </View>
        )


    return (
        <></>
    )
}

export default memo(DriverCard)




const webStyles = {
    container: {
        borderRadius: "5px",
        boxShadow: '#0px 0px 10px #C9C8C8',
    },

}

const nativeStyles = StyleSheet.create({
    container: {
        position: "relative",
        borderRadius: 5,
        shadowColor: '#C9C8C8',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0,
        shadowRadius: 5,
        width: "100%",
        backgroundColor: "#fff",
        height: "auto",
        padding: 10,
        minHeight: 300,
    },
    headerContainer: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "100%",
    },
    truckContainer: {
        borderRadius: 5,
        backgroundColor: "#fff",
        paddingHorizontal: 11,
        paddingVertical: 5,
        shadowColor: colors.black_text,
        shadowRadius: 5,
        elevation: 3,
    },
    truckIcon: {
        width: 16,
        height: 12,
        tintColor: colors.main
    },
    driverStatusContainer:{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    robotIcon: {
        width: 70,
        height: 70,
    },
    robotContainer: {
        borderRadius: 100,
        borderWidth: 5,
        borderColor: colors.main,
        padding: 15,
        backgroundColor: "#fff",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },

    driverInfoContainer:{
        justifyContent: "center",
        alignItems: "center"
    },
    idContainer:{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    driverNameText: {
        fontSize: 14,
        fontWeight: "600"
    },
    statusIndicator:{
        width: 5,
        height: 5,
        marginLeft: 5
    },
    driverAccountStatusText: {
        fontSize: 8,
        marginTop: 4
    },
    ratingContainer:{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
})