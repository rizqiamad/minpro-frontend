export interface FormValue {
  name: string
  image: File | null
  start_date: string
  end_date: string
  start_time: string
  end_time: string
  name_place: string
  address: string
  city: string
  category: string
  type: string
  description: string
  terms_condition: string
  coupon_seat: string | null
}