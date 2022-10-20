import { Image, Text, Pressable, View, ImageBackground, ImageSourcePropType, ViewStyle, StyleSheet } from 'react-native'
import React, { memo, useState } from 'react';
import { colors, common_styles } from '../../themes';
import { usePlatform } from '../../hooks';
import { User } from './types';
import { case_icon, clock_icon, delete_icon, edit_icon, rating_icon } from '../../assets';
import Vehicule from './Vehicule';
import { css } from './css';
import { defaultFlex } from '../../themes/styles';

type UserCardProps = {
    data: User;
    onDelete: (Userid: string) => void,
    onEdit: (Userid: string) => void,

}

const PLATFORM = usePlatform()

const UserCard = (props: UserCardProps) => {
    const { data, onDelete, onEdit } = props

    if (PLATFORM === "native")
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
                        <View style={[nativeStyles.userImageContainer, { backgroundColor: data?.usertype === "driver" ? "0" : (data?.approved ? colors.bg_rimary : colors.disabled) }]}>
                            <View style={[nativeStyles.userImageWraper, { backgroundColor: data?.approved ? colors.bg_rimary : colors.disabled }]}>
                                <View style={{ position: 'relative' }}>
                                    <Image
                                        source={{ uri: "https://picsum.photos/200" }}
                                        style={nativeStyles.userImage}
                                    />
                                    {data.usertype === "mvp_user" &&
                                        <View style={nativeStyles.caseIconWraper}>
                                            <Image source={case_icon} style={{ width: 10, height: 8 }} />
                                        </View>
                                    }

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

                            {data?.usertype === "driver" &&
                                <View style={[nativeStyles.onlineStatus, { backgroundColor: data.queue ? colors.success : colors.disabled }]} />
                            }
                        </View>

                        <Text style={[nativeStyles.userAccontStatusText, { color: data?.approved ? colors.black_text : colors.canceled }]}>
                            Account {data?.approved ? "Approved" : "Not Approved"}
                        </Text>

                        {["driver", "mvp_user"].includes(data?.usertype) &&
                            <View style={nativeStyles.ratingWraper}>
                                <Text style={{ fontSize: 10, marginRight: 3, marginTop: 2.5 }}>
                                    3.9
                                </Text>
                                <Image source={rating_icon} style={{ width: 12, height: 12 }} />
                            </View>
                        }

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
                                    <View style={[nativeStyles.footerButton, { backgroundColor: colors.disabled, paddingTop: 6, paddingBottom: 6 }]}>
                                        <Text style={[nativeStyles.footerButtonText, { fontSize: 20 }]}>0 $</Text>
                                    </View>

                                }
                            </View>

                        </View>

                    </View>
                </>
                {/** car Info */}
                {data?.usertype === "driver" &&
                    <Vehicule />
                }
            </View>
        )

    return (
        <div style={webStyles.container} className="user_card">
            <style>
                {css}
            </style>
            <>
                <div style={webStyles.actionsContainer}>
                    <div style={webStyles.actionsButton} onClick={() => onEdit?.(data?.id)}>
                        <img src={edit_icon as any} style={{ width: 7, height: 7 }} />
                        <div style={{ ...webStyles.actionsButtonText, color: colors.success }}>
                            Edit
                        </div>
                    </div>
                    <div style={webStyles.actionsButton} onClick={() => onDelete?.(data?.id)}>
                        <img src={delete_icon as any} style={{ width: 7, height: 7 }} />
                        <span style={{ ...webStyles.actionsButtonText, color: colors.canceled }}>
                            Delete
                        </span>
                    </div>
                </div>
                <div>
                    <div style={{ ...webStyles.userImageContainer, backgroundColor: data?.usertype === "driver" ? "0" : (data?.approved ? colors.bg_rimary : colors.disabled) }}>
                        <div style={{ ...webStyles.userImageWraper, backgroundColor: data?.approved ? colors.bg_rimary : colors.disabled }}>
                            <div style={{ position: 'relative' }}>
                                <img
                                    src={"https://picsum.photos/200"}
                                    style={webStyles.userImage}
                                />
                                {data.usertype === "mvp_user" &&
                                    <div style={webStyles.caseIconWraper}>
                                        <img src={case_icon as any} style={{ width: 10, height: 8 }} />
                                    </div>
                                }

                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ height: 36 }}>
                    {data?.approved &&
                        <div style={webStyles.TimerContainer}>
                            <div style={webStyles.TimerWraper}>
                                <img src={clock_icon as any} style={{ width: 20, height: 16 }} />
                            </div>
                        </div>
                    }
                </div>

                <div style={webStyles.userInfoContainer}>
                    <div style={{ display: 'flex', flexDirection: "row", alignItems: "center" }}>
                        <span style={webStyles.userNameText}>
                            {data?.firstName ?? "First Name"} {data?.firstName ?? "Last Name"}
                        </span>

                        {data?.usertype === "driver" &&
                            <div style={{ ...webStyles.onlineStatus, backgroundColor: data.queue ? colors.success : colors.disabled }} />
                        }
                    </div>

                    <span style={{ ...webStyles.userAccontStatusText, color: data?.approved ? colors.black_text : colors.canceled }}>
                        Account {data?.approved ? "Approved" : "Not Approved"}
                    </span>

                    {["driver", "mvp_user"].includes(data?.usertype) &&
                        <div style={webStyles.ratingWraper}>
                            <span style={{ fontSize: 10, marginRight: 3, marginTop: 2.5 }}>
                                3.9
                            </span>
                            <img src={rating_icon as any} style={{ width: 12, height: 12 }} />
                        </div>
                    }

                    <div style={webStyles.userDetailsContainer}>
                        <div style={webStyles.userInfo}>
                            <span style={webStyles.userInfoKeyText}>
                                phone number :
                            </span>
                            <span style={webStyles.userInfoValueText}>
                                {data?.mobile ?? "-"}
                            </span>
                        </div>
                        <div style={{ ...webStyles.userInfo, marginTop: 7 }}>
                            <span style={webStyles.userInfoKeyText}>
                                E-mail :
                            </span>
                            <span style={webStyles.userInfoValueText}>
                                {data?.email ?? "-"}
                            </span>
                        </div>
                        <div style={{ ...webStyles.userInfo, marginTop: 7 }}>
                            <span style={webStyles.userInfoKeyText}>
                                Bank Info :
                            </span>
                            <span style={webStyles.userInfoValueText}>
                                ???
                            </span>
                        </div>

                        <div style={webStyles.footerContainer}>
                            {data?.approved ?
                                <>
                                    <div style={webStyles.footerButton}>
                                        <span style={webStyles.footerButtonText}>{"???"}</span>
                                        <span style={webStyles.footerButtonSubText}>Booking</span>
                                    </div>
                                    <div style={{ width: 10 }} />

                                    <div style={webStyles.footerButton}>
                                        <span style={webStyles.footerButtonText}>{data?.walletBalance}</span>
                                        <span style={webStyles.footerButtonSubText}>wallet balance</span>
                                    </div>
                                </>

                                :
                                <div style={{ ...webStyles.footerButton, backgroundColor: colors.disabled, paddingTop: 6, paddingBottom: 6 }}>
                                    <span style={{ ...webStyles.footerButtonText, fontSize: 20 }}>0 $</span>
                                </div>

                            }
                        </div>
                    </div>
                </div>
            </>
            {/** car Info */}
            {data?.usertype === "driver" &&
                <Vehicule />
            }
        </div>
    )
}

export default memo(UserCard)




const nativeStyles = StyleSheet.create({
    container: {
        ...defaultFlex,
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
        paddingTop: 12,
        paddingBottom: 12,
        boxShadow: '#0px 0px 10px #C9C8C8',
    },
    actionsContainer: {
        ...defaultFlex,
        position: "absolute",
        top: includeUnitIfWeb(12),
        left: 0,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        paddingLeft: includeUnitIfWeb(6),
        paddingRight: includeUnitIfWeb(6)
    },
    actionsButton: {
        ...defaultFlex,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        elevation: includeUnitIfWeb(3),
        backgroundColor: "#fff",
        width: includeUnitIfWeb(80),
        paddingTop: includeUnitIfWeb(4),
        paddingBottom: includeUnitIfWeb(4),
        borderRadius: includeUnitIfWeb(5),

    },
    actionsButtonText: {
        textTransform: 'uppercase',
        fontWeight: "600",
        fontSize: includeUnitIfWeb(10),
        marginLeft: includeUnitIfWeb(3)
    },

    /** user image block */
    userImageContainer: {
        ...defaultFlex,
        height: includeUnitIfWeb(78),
        width: "100%",
        marginTop: includeUnitIfWeb(30),
        overflow: "visible",
        alignItems: "center",
        justifyContent: "center"
    },
    userImageWraper: {
        ...defaultFlex,
        width: includeUnitIfWeb(132),
        height: includeUnitIfWeb(132),
        borderRadius: includeUnitIfWeb(132),
        justifyContent: "center",
        alignItems: "center",
        flexShrink: 0,
    },
    userImage: {
        width: includeUnitIfWeb(112),
        height: includeUnitIfWeb(112),
        borderRadius: includeUnitIfWeb(112),
        backgroundColor: "#fff"
    },
    caseIconWraper: {
        ...defaultFlex,
        position: "absolute",
        bottom: includeUnitIfWeb(15),
        right: includeUnitIfWeb(1),
        paddingTop: includeUnitIfWeb(5),
        paddingBottom: includeUnitIfWeb(5),
        paddingLeft: includeUnitIfWeb(4),
        paddingRight: includeUnitIfWeb(4),
        borderRadius: includeUnitIfWeb(16),
        borderWidth: includeUnitIfWeb(3),
        borderColor: "#fff",
        backgroundColor: colors.waiting,
    },


    ratingWraper: {
        ...defaultFlex,
        flexDirection: "row",
        alignItems: "center"
    },
    onlineStatus: {
        ...defaultFlex,
        width: includeUnitIfWeb(10),
        height: includeUnitIfWeb(10),
        borderRadius: includeUnitIfWeb(10),
        marginLeft: includeUnitIfWeb(5)
    },
    /** timer  */
    TimerContainer: {
        ...defaultFlex,
        flexDirection: "row",
        justifyContent: "flex-end",
        paddingLeft: includeUnitIfWeb(8),
        paddingRight: includeUnitIfWeb(8),
        paddingTop: includeUnitIfWeb(5),
        paddingBottom: includeUnitIfWeb(5)
    },
    TimerWraper: {
        ...defaultFlex,
        padding: includeUnitIfWeb(5),
        borderRadius: includeUnitIfWeb(3),
        backgroundColor: "#fff",
        shadowColor: '#000',
        elevation: 2,
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: includeUnitIfWeb(5),
    },
    /** user info */
    userInfoContainer: {
        ...defaultFlex,
        width: "100%",
        alignItems: "center"
    },
    userNameText: {
        fontSize: includeUnitIfWeb(14),
        fontWeight: "600"
    },
    userAccontStatusText: {
        fontSize: includeUnitIfWeb(8),
        marginTop: includeUnitIfWeb(4)
    },
    userDetailsContainer: {
        ...defaultFlex,
        width: "100%",
        paddingLeft: includeUnitIfWeb(24),
        paddingRight: includeUnitIfWeb(24),
        marginTop: includeUnitIfWeb(15),
    },
    userInfo: {
        ...defaultFlex,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    userInfoKeyText: {
        fontSize: includeUnitIfWeb(10),
        fontWeight: "600"
    },
    userInfoValueText: {
        fontSize: includeUnitIfWeb(10),
        fontWeight: "400"
    },
    footerContainer: {
        ...defaultFlex,
        marginTop: includeUnitIfWeb(10),
        flexDirection: "row",
        width: "100%",
    },
    footerButton: {
        ...defaultFlex,
        backgroundColor: colors.bg_rimary,
        flexGrow: 1,
        alignItems: "center",
        borderRadius: includeUnitIfWeb(5),
        paddingTop: includeUnitIfWeb(6),
        paddingBottom: includeUnitIfWeb(3),
        shadowColor: colors.gray,
        elevation: includeUnitIfWeb(3)
    },
    footerButtonText: {
        color: "#fff",
        fontSize: includeUnitIfWeb(14),
        fontWeight: "700",
    },
    footerButtonSubText: {
        color: "#fff",
        fontSize: includeUnitIfWeb(8),
        lineHeight: includeUnitIfWeb(9.68),

    }
})


const webStyles: any = {
    ...nativeStyles
}

function includeUnitIfWeb(value: number): any {
    if (PLATFORM === "native") return value
    return `${value}px`
}
