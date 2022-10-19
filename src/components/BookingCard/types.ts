export type propsType = {
  id: string
  pickup: {
    add: string
    lat: number
    lng: number
  }
  drop: {
    add: string
    lat: number
    lng: number
  }

  driver: string
  driver_image: string
  driver_name: string
  driver_contact?: string
  driver_token: string
  vehicle_number?: string
  driverRating?: string
  fleetadmin?: string
  status?: string
  requestedDrivers?: [] //todo
  payableAmount?: number
  driversOffers?: [] //todo
  driver_arrive_time: number
  customer_token: string
  trip_start_time: number
  startTime: number
  trip_end_time: number
  endTime: number
  total_trip_time: number
  customer: string
  prepaid: boolean
  payment_mode: 'cash' | 'wallet'
  cashPaymentAmount: string
  driver_share: string
  rating: number
  pickup_image: string
  deliver_image: string
  promo_applied?: boolean
  promo_details?: any
  usedWalletMoney?: number
  paymentPacket: {
    appcat: string
    payment_mode: string
    customer_paid: string
    cardPaymentAmount: number
    discount: number
    usedWalletMoney: number
    cashPaymentAmount: number
    promo_applied: boolean
    promo_details: any
    payableAmount: number
  }
}
