import { api } from '@/lib/axios'

export interface GetMonthCanceledOrdersOrdersAmountResponse {
  amount: number
  diffFromLastMonth: number
}

export async function getMonthCanceledOrdersOrdersAmount() {
  const response = await api.get<GetMonthCanceledOrdersOrdersAmountResponse>(
    '/metrics/month-canceled-orders-amount',
  )

  return response.data
}
