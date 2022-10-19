import { Image, Text, Pressable, View, ImageBackground, ImageSourcePropType, ViewStyle, StyleSheet } from 'react-native'
import React, { memo, useState } from 'react';
import { colors, common_styles } from '../../themes';
import { usePlatform } from '../../hooks';
import { User } from './types';



const UserCard = (props: User) => {
    const { } = props
    const platform = usePlatform()

    if (platform === "native")
        return (
            <View style={nativeStyles.container}>
                <View style={nativeStyles.actionsContainer}>
                    <Pressable style={nativeStyles.actionsButton}>
                        <Text style={[nativeStyles.actionsButtonText, { color: colors.success }]}>
                            Edit
                        </Text>
                    </Pressable>
                    <Pressable style={nativeStyles.actionsButton}>
                        <Text style={[nativeStyles.actionsButtonText, { color: colors.canceled }]}>
                            Delete
                        </Text>
                    </Pressable>
                </View>
                <View>
                    <View style={nativeStyles.userImageContainer}>
                        <View style={nativeStyles.userImageWraper}>
                            <Image
                                source={{ uri: props.profile_image ?? "https://i.picsum.photos/id/1009/200/200.jpg" }}
                                style={nativeStyles.userImage}
                                resizeMode={'cover'}
                            />
                        </View>
                    </View>
                </View>
                <View style={nativeStyles.userInfoContainer}>
                    <Text style={nativeStyles.userNameText}>
                        {props.firstName ?? "First Name"} {props.firstName ?? "Last Name"}
                    </Text>
                    <Text style={[nativeStyles.userAccontStatusText, { color: props.approved ? colors.black_text : colors.canceled }]}>
                        Account {props.approved ? "Approved" : "Not Approved"}
                    </Text>
                    <View style={nativeStyles.userDetailsContainer}>
                        <View style={nativeStyles.userInfo}>
                            <Text style={nativeStyles.userInfoKeyText}>
                                phone number :
                            </Text>
                            <Text style={nativeStyles.userInfoValueText}>
                                {props.mobile ?? "-"}
                            </Text>
                        </View>
                        <View style={[nativeStyles.userInfo, { marginTop: 7 }]}>
                            <Text style={nativeStyles.userInfoKeyText}>
                                E-mail :
                            </Text>
                            <Text style={nativeStyles.userInfoValueText}>
                                {props.email ?? "-"}
                            </Text>
                        </View>
                        <View style={[nativeStyles.userInfo, { marginTop: 7 }]}>
                            <Text style={nativeStyles.userInfoKeyText}>
                                Bank Info :
                            </Text>
                            <Text style={nativeStyles.userInfoValueText}>
                                ???
                            </Text>
                        </View>
                    </View>
                    <View>

                    </View>
                </View>
            </View>
        )

    return (
        <></>
    )
}

export default memo(UserCard)

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
        paddingVertical: 12,

    },
    actionsContainer: {
        position: "absolute",
        top: 12,
        left: 0,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        paddingHorizontal: 6

    },
    actionsButton: {
        flexDirection: "row",
        alignItems: "center",
    },
    actionsButtonText: {
        textTransform: 'uppercase',
        fontWeight: "600",
        fontSize: 10
    },
    /** user image block */
    userImageContainer: {
        height: 78,
        width: "100%",
        backgroundColor: colors.bg_rimary,
        marginTop: 27,
        overflow: "visible",
        alignItems: "center",
        justifyContent: "center"
    },
    userImageWraper: {
        width: 132,
        height: 132,
        backgroundColor: colors.bg_rimary,
        borderRadius: 132,
        justifyContent: "center",
        alignItems: "center"
    },
    userImage: {
        width: 100,
        height: 100,
        borderRadius: 100,
    },
    /** user info */
    userInfoContainer: {
        marginTop: 35,
        width: "100%",
        alignItems: "center"
    },
    userNameText: {
        fontSize: 14,
        fontWeight: "600"
    },
    userAccontStatusText: {
        fontSize: 8,
        marginTop: 4
    },
    userDetailsContainer: {
        width: "100%",
        paddingHorizontal: 24,
        marginTop: 15,
        gap: 7
    },
    userInfo: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    userInfoKeyText: {
        fontSize: 10,
        fontWeight: "600"
    },
    userInfoValueText: {
        fontSize: 10,
        fontWeight: "400"
    },


})