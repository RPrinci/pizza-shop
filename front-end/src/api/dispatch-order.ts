import { api } from '@/lib/axios'

export interface DispatchOrderQuery {
  orderId: string
}

export async function dispatchOrder({ orderId }: DispatchOrderQuery) {
  await api.patch(`/orders/${orderId}/dispatch`)
}
