import { api } from '@/lib/axios'

export interface DeliverOrderQuery {
  orderId: string
}

export async function deliverOrder({ orderId }: DeliverOrderQuery) {
  await api.patch(`/orders/${orderId}/deliver`)
}
