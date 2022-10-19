export type Driver = {
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
  