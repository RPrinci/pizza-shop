import { http, HttpResponse } from 'msw'

import {
  GetOrderDetailQuery,
  GetOrderDetailsResponse,
} from '../get-order-details'

export const getOrderDetailsMock = http.get<
  GetOrderDetailQuery,
  never,
  GetOrderDetailsResponse
>('/orders/:orderId', ({ params }) => {
  return HttpResponse.json({
    id: params.orderId,
    customer: {
      name: 'John Doe',
      email: 'johndoe@example.com',
      phone: '1-27029',
    },
    status: 'pending',
    createdAt: new Date().toISOString(),
    totalInCents: 4000,
    orderItems: [
      {
        id: 'order-item-1',
        priceInCents: 1000,
        product: { name: 'Pizza Regina' },
        quantity: 1,
      },
      {
        id: 'order-item-2',
        priceInCents: 1500,
        product: { name: 'Pizza Marguerita' },
        quantity: 2,
      },
    ],
  })
})
