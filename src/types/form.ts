export interface FormValue {
  name: string
  image: File | undefined
  start_date: Date | null
  end_date: Date | null
  start_time: string
  end_time: string
  name_place: string
  address: string
  city: string
  category: string
  type: string
  description: string
  terms_condition: string
  coupon_seat: number | null
}