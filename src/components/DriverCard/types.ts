export type Driver = {
    id: string
    createdAt: number
    firstName: string
    lastName: string
    rating: number
    mobile: string
    email: string
    bankInfo: string
    isOnline: boolean
    approved: boolean
    walletBalance: number
    profile_image?: string
    booking: number
    paymentStatus: "done" | "waiting" | "not paid"
    paymentStatusText: string
    onPressTruck: ()=>void
    onPressBooking: ()=>void
    onPressPayment: ()=>void
  }
  