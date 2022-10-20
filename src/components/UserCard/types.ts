export type User = {
  id: string
  createdAt: number
  firstName: string
  lastName: string
  mobile: string
  email: string
  usertype: string
  referralId: string
  approved: boolean
  walletBalance: number
  loginType: string
  licenseImage?: string
  profile_image?: string
  pushToken?: string
  userPlatform?: string
  queue: boolean
  fleetadmin?: string
  createdByAdmin?: boolean
  driverUpdateRequest?: any //todo
  requestToBeDriver?: boolean
  authorized: boolean
  lang: {
    langLocale: string
    dateLocale: string
  }
}

export type VehicleType = {
  id: string
  name: string
  name_ar: string
  name_he: string
  image: string
  base_fare: number
  rate_per_unit_distance: number
  rate_per_hour: number
  convenience_fees: number
  min_fare: number
  convenience_fee_type: 'flat' | 'percentage'
  extra_info?: string
  limitations?: VehicleTypeLimitation[]
}

export type VehicleTypeLimitation = any
