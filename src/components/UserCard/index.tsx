import { Image, Text, Pressable, View, ImageBackground, ImageSourcePropType, ViewStyle, StyleSheet } from 'react-native'
import React, { memo, useState } from 'react';
import { colors, common_styles } from '../../themes';
import { usePlatform } from '../../hooks';
import { User } from './types';
import { case_icon, clock_icon, delete_icon, edit_icon, rating_icon } from '../../assets';
import Vehicule from './Vehicule';

type UserCardProps = {
    data: User;
    onDelete: (Userid: string) => void,
    onEdit: (Userid: string) => void
}

const UserCard = (props: UserCardProps) => {
    const { data, onDelete, onEdit } = props
    const platform = usePlatform()

    if (platform === "native")
        return (

            <View style={nativeStyles.container}>
                <>
                    <View style={nativeStyles.actionsContainer}>
                        <Pressable style={nativeStyles.actionsButton} onPress={() => onEdit?.(data?.id)}>
                            <Image source={edit_icon} style={{ width: 7, height: 7 }} />
                            <Text style={[nativeStyles.actionsButtonText, { color: colors.success }]}>
                                Edit
                            </Text>
                        </Pressable>
                        <Pressable style={nativeStyles.actionsButton} onPress={() => onDelete?.(data?.id)}>
                            <Image source={delete_icon} style={{ width: 7, height: 7 }} />
                            <Text style={[nativeStyles.actionsButtonText, { color: colors.canceled }]}>
                                Delete
                            </Text>
                        </Pressable>
                    </View>
                    <View>
                        <View style={[nativeStyles.userImageContainer, { backgroundColor: data?.approved ? colors.bg_rimary : colors.disabled }]}>
                            <View style={[nativeStyles.userImageWraper, { backgroundColor: data?.approved ? colors.bg_rimary : colors.disabled }]}>
                                <View style={{ position: 'relative' }}>
                                    <Image
                                        source={{ uri: "https://i.picsum.photos/id/1009/200/200.jpg" }}
                                        style={nativeStyles.userImage}
                                    />
                                    <View style={nativeStyles.caseIconWraper}>
                                        <Image source={case_icon} style={{ width: 10, height: 8 }} />
                                    </View>

                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{ height: 36 }}>
                        {data?.approved &&
                            <View style={nativeStyles.TimerContainer}>
                                <Pressable style={nativeStyles.TimerWraper}>
                                    <Image source={clock_icon} style={{ width: 20, height: 16 }} />
                                </Pressable>
                            </View>
                        }
                    </View>

                    <View style={nativeStyles.userInfoContainer}>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Text style={nativeStyles.userNameText}>
                                {data?.firstName ?? "First Name"} {data?.firstName ?? "Last Name"}
                            </Text>
                            <View style={{ width: 10, height: 10, borderRadius: 10, backgroundColor: data.queue ? colors.success : colors.disabled, marginLeft: 5 }} />
                        </View>

                        <Text style={[nativeStyles.userAccontStatusText, { color: data?.approved ? colors.black_text : colors.canceled }]}>
                            Account {data?.approved ? "Approved" : "Not Approved"}
                        </Text>

                        <View style={nativeStyles.ratingWraper}>
                            <Text style={{ fontSize: 10, marginRight: 3, marginTop: 2.5 }}>
                                3.9
                            </Text>
                            <Image source={rating_icon} style={{ width: 12, height: 12 }} />
                        </View>

                        <View style={nativeStyles.userDetailsContainer}>
                            <View style={nativeStyles.userInfo}>
                                <Text style={nativeStyles.userInfoKeyText}>
                                    phone number :
                                </Text>
                                <Text style={nativeStyles.userInfoValueText}>
                                    {data?.mobile ?? "-"}
                                </Text>
                            </View>
                            <View style={[nativeStyles.userInfo, { marginTop: 7 }]}>
                                <Text style={nativeStyles.userInfoKeyText}>
                                    E-mail :
                                </Text>
                                <Text style={nativeStyles.userInfoValueText}>
                                    {data?.email ?? "-"}
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

                            <View style={nativeStyles.footerContainer}>
                                {data?.approved ?
                                    <>
                                        <View style={nativeStyles.footerButton}>
                                            <Text style={nativeStyles.footerButtonText}>{"???"}</Text>
                                            <Text style={nativeStyles.footerButtonSubText}>Booking</Text>
                                        </View>
                                        <View style={{ width: 10 }} />

                                        <View style={nativeStyles.footerButton}>
                                            <Text style={nativeStyles.footerButtonText}>{data?.walletBalance}</Text>
                                            <Text style={nativeStyles.footerButtonSubText}>wallet balance</Text>
                                        </View>
                                    </>

                                    :
                                    <View style={[nativeStyles.footerButton, { backgroundColor: colors.disabled, paddingVertical: 6 }]}>
                                        <Text style={[nativeStyles.footerButtonText, { fontSize: 20 }]}>0 $</Text>
                                    </View>

                                }
                            </View>

                        </View>

                    </View>
                </>
                {/** car Info */}
                {data.authorized &&
                    <Vehicule />
                }
            </View>
        )

    return (
        <div>
            web component
        </div>
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
        elevation: 5,
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 1,
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
        justifyContent: "center",
        elevation: 3,
        backgroundColor: "#fff",
        width: 80,
        paddingVertical: 4,
        borderRadius: 5
    },
    actionsButtonText: {
        textTransform: 'uppercase',
        fontWeight: "600",
        fontSize: 10,
        marginLeft: 3
    },

    /** user image block */
    userImageContainer: {
        height: 78,
        width: "100%",

        marginTop: 30,
        overflow: "visible",
        alignItems: "center",
        justifyContent: "center"
    },
    userImageWraper: {
        width: 132,
        height: 132,
        borderRadius: 132,
        justifyContent: "center",
        alignItems: "center"
    },
    caseIconWraper: {
        position: "absolute",
        bottom: 10,
        right: -3,
        paddingVertical: 5,
        paddingHorizontal: 4,
        borderRadius: 16,
        borderWidth: 3,
        borderColor: "#fff",
        backgroundColor: colors.waiting,
    },

    userImage: {
        width: 100,
        height: 100,
        borderRadius: 100,
        backgroundColor: "#fff"
    },
    ratingWraper: {
        flexDirection: "row",
        alignItems: "center"
    },
    /** timer  */
    TimerContainer: {
        flexDirection: "row",
        justifyContent: "flex-end",
        paddingHorizontal: 8,
        paddingVertical: 5
    },
    TimerWraper: {
        padding: 5,
        borderRadius: 3,
        backgroundColor: "#fff",
        shadowColor: '#000',
        elevation: 2,
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 5,
    },
    /** user info */
    userInfoContainer: {

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
    footerContainer: {
        marginTop: 10,
        flexDirection: "row",
        width: "100%",
    },
    footerButton: {
        backgroundColor: colors.bg_rimary,
        flexGrow: 1,
        alignItems: "center",
        borderRadius: 5,
        paddingTop: 6,
        paddingBottom: 3
    },
    footerButtonText: {
        color: "#fff",
        fontSize: 14,
        fontWeight: "700",
    },
    footerButtonSubText: {
        color: "#fff",
        fontSize: 8,
        lineHeight: 9.68
    }

})