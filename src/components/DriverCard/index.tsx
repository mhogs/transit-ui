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
import { css } from './css'

const { PLATFORM, includeUnitIfWeb } = usePlatform()

const DriverCard = (props: Driver) => {
  console.log(props)

  if (PLATFORM === 'native')
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
            {props.approved ? 'Account Approved' : 'Account Not Approved'}
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

  return (
    <div style={{}} className="driver_card">
      <style>
        {css}
      </style>

    </div>
  )
}

export default memo(DriverCard)



const nativeStyles = StyleSheet.create({
  container: {
    position: 'relative',
    borderRadius: includeUnitIfWeb(5),
    shadowColor: '#C9C8C8',
    elevation: 2,
    shadowRadius: includeUnitIfWeb(5),
    width: '100%',
    backgroundColor: '#fff',
    height: 'auto',
    padding: includeUnitIfWeb(24),
    minHeight: includeUnitIfWeb(300),
  },

  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
  },
  truckContainer: {
    borderRadius: includeUnitIfWeb(5),
    backgroundColor: '#fff',
    paddingHorizontal: includeUnitIfWeb(11),
    paddingVertical: includeUnitIfWeb(5),
    shadowColor: colors.black_text,
    shadowRadius: includeUnitIfWeb(5),
    elevation: 3,
  },
  truckIcon: {
    width: includeUnitIfWeb(16),
    height: includeUnitIfWeb(12),
    tintColor: colors.main,
  },

  driverStatusContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  robotContainer: {
    borderRadius: includeUnitIfWeb(100),
    borderWidth: includeUnitIfWeb(5),
    borderColor: colors.main,
    padding: includeUnitIfWeb(15),
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  robotIcon: {
    width: includeUnitIfWeb(70),
    height: includeUnitIfWeb(70),
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
    fontSize: includeUnitIfWeb(14),
    fontWeight: '600',
  },
  onlineIndicator: {
    borderRadius: includeUnitIfWeb(5),
    width: includeUnitIfWeb(5),
    height: includeUnitIfWeb(5),
    marginLeft: includeUnitIfWeb(5),
  },
  driverAccountStatusText: {
    fontSize: includeUnitIfWeb(8),
    marginTop: includeUnitIfWeb(4),
  },
  ratingWraper: {
    marginTop: includeUnitIfWeb(2),
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
    fontSize: includeUnitIfWeb(10),
    fontWeight: '600',
  },
  userInfoItemValueText: {
    fontSize: includeUnitIfWeb(10),
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
    borderRadius: includeUnitIfWeb(5),
    paddingTop: includeUnitIfWeb(6),
    paddingBottom: includeUnitIfWeb(3),
  },
  driverStatsButtonText: {
    fontSize: includeUnitIfWeb(14),
    fontWeight: '700',
    color: '#fff',
  },
  driverStatsButtonSubText: {
    fontSize: includeUnitIfWeb(8),
    lineHeight: includeUnitIfWeb(9.68),
    color: '#fff',
  },
})

const webStyles: any = {
  ...nativeStyles,
}