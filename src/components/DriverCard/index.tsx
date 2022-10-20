import {
  Image,
  Text,
  Pressable,
  View,
  ImageBackground,
  ImageSourcePropType,
  ViewStyle,
  StyleSheet,
} from 'react-native'
import React, { memo, useState } from 'react'
import { colors, common_styles } from '../../themes'
import { usePlatform } from '../../hooks'
import { Driver } from './types'
import { rating_icon, robot_icon, driver_truck_icon } from '../../assets'

const DriverCard = (props: Driver) => {
  console.log(props)
  const platform = usePlatform()

  if (platform === 'native')
    return (
      <View style={nativeStyles.container}>
        <View style={nativeStyles.headerContainer}>
          <Pressable onPress={() => props.onPressTruck?.()}>
            <View style={nativeStyles.truckContainer}>
              <Image style={nativeStyles.truckIcon} source={driver_truck_icon} />
            </View>
          </Pressable>
        </View>

        <View style={{ height: 5 }}></View>

        <View style={nativeStyles.driverStatusContainer}>
          <View style={nativeStyles.robotContainer}>
            {props.profile_image ? (
              <Image
                style={nativeStyles.robotIcon}
                source={{ uri: props.profile_image }}
              />
            ) : (
              <Image style={nativeStyles.robotIcon} source={robot_icon} />
            )}
          </View>
        </View>

        <View style={{ height: 5 }}></View>

        <View style={nativeStyles.driverInfoContainer}>
          <View style={nativeStyles.idContainer}>
            <Text style={nativeStyles.driverNameText}>
              {props.firstName} {props.lastName}
            </Text>
            <View
              style={[
                nativeStyles.onlineIndicator,
                {
                  backgroundColor: props.isOnline
                    ? colors.bg_rimary
                    : colors.gray,
                },
              ]}
            ></View>
          </View>
          <Text
            style={[
              nativeStyles.driverAccountStatusText,
              { color: props.approved ? colors.main : colors.canceled },
            ]}
          >
            {props.approved? 'Account Approved': 'Account Not Approved'}
          </Text>
          <View style={nativeStyles.ratingWraper}>
            <Text style={{ fontSize: 10, marginRight: 3 }}>
              {props.rating ?? '-'}
            </Text>
            <Image source={rating_icon} style={{ width: 12, height: 12 }} />
          </View>
        </View>

        <View style={{ height: 5 }}></View>

        <View style={{ height: 60, backgroundColor: colors.main }}></View>

        <View style={{ height: 15 }}></View>

        <View style={nativeStyles.driverDetailsContainer}>
          <View style={nativeStyles.driverInfoItemContainer}>
            <Text style={nativeStyles.userInfoItemKeyText}>phone number :</Text>
            <Text style={nativeStyles.userInfoItemValueText}>
              {props.mobile ?? '-'}
            </Text>
          </View>
          <View
            style={[nativeStyles.driverInfoItemContainer, { marginTop: 7 }]}
          >
            <Text style={nativeStyles.userInfoItemKeyText}>E-mail :</Text>
            <Text style={nativeStyles.userInfoItemValueText}>
              {props.email ?? '-'}
            </Text>
          </View>
          <View
            style={[nativeStyles.driverInfoItemContainer, { marginTop: 7 }]}
          >
            <Text style={nativeStyles.userInfoItemKeyText}>Bank Info :</Text>
            <Text style={nativeStyles.userInfoItemValueText}>
              {props.bankInfo ?? '-'}
            </Text>
          </View>
        </View>

        <View style={{ height: 15 }}></View>

        <View style={nativeStyles.driverStatsContainer}>
          <Pressable
            style={{ width: '30%' }}
            onPress={() => props.onPressBooking?.()}
          >
            <View style={[nativeStyles.driverStatsButton]}>
              <Text style={nativeStyles.driverStatsButtonText}>
                {props.booking ?? 0}
              </Text>
              <Text style={nativeStyles.driverStatsButtonSubText}>Booking</Text>
            </View>
          </Pressable>
          <View style={{ width: 20 }}></View>
          <Pressable
            style={{ flexGrow: 1 }}
            onPress={() => props.onPressPayment?.()}
          >
            <View
              style={[
                nativeStyles.driverStatsButton,
                {
                  backgroundColor: props.paymentStatus === 'not paid'
                    ? colors.canceled
                    : props.paymentStatus === 'waiting'
                      ? colors.waiting 
                    : colors.bg_rimary,
                },
              ]}
            >
              <Text style={nativeStyles.driverStatsButtonText}>
                + {props.walletBalance ?? 0} $
              </Text>
              <View></View>
              <Text style={nativeStyles.driverStatsButtonSubText}>
                {props.paymentStatusText}
              </Text>
            </View>
          </Pressable>
        </View>
      </View>
    )

  return <></>
}

export default memo(DriverCard)

const webStyles = {
  container: {
    borderRadius: '5px',
    boxShadow: '#0px 0px 10px #C9C8C8',
  },
}

const nativeStyles = StyleSheet.create({
  container: {
    position: 'relative',
    borderRadius: 5,
    shadowColor: '#C9C8C8',
    elevation: 2,
    shadowRadius: 5,
    width: '100%',
    backgroundColor: '#fff',
    height: 'auto',
    padding: 24,
    minHeight: 300,
  },

  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
  },
  truckContainer: {
    borderRadius: 5,
    backgroundColor: '#fff',
    paddingHorizontal: 11,
    paddingVertical: 5,
    shadowColor: colors.black_text,
    shadowRadius: 5,
    elevation: 3,
  },
  truckIcon: {
    width: 16,
    height: 12,
    tintColor: colors.main,
  },

  driverStatusContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  robotContainer: {
    borderRadius: 100,
    borderWidth: 5,
    borderColor: colors.main,
    padding: 15,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  robotIcon: {
    width: 70,
    height: 70,
  },

  driverInfoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  idContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  driverNameText: {
    fontSize: 14,
    fontWeight: '600',
  },
  onlineIndicator: {
    borderRadius: 5,
    width: 5,
    height: 5,
    marginLeft: 5,
  },
  driverAccountStatusText: {
    fontSize: 8,
    marginTop: 4,
  },
  ratingWraper: {
    marginTop: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  driverDetailsContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  driverInfoItemContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  userInfoItemKeyText: {
    fontSize: 10,
    fontWeight: '600',
  },
  userInfoItemValueText: {
    fontSize: 10,
    fontWeight: '400',
  },

  driverStatsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
  },
  driverStatsButton: {
    backgroundColor: colors.bg_rimary,
    alignItems: 'center',
    borderRadius: 5,
    paddingTop: 6,
    paddingBottom: 3,
  },
  driverStatsButtonText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#fff',
  },
  driverStatsButtonSubText: {
    fontSize: 8,
    lineHeight: 9.68,
    color: '#fff',
  },
})
