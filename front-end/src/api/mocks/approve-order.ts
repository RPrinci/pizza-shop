import { http, HttpResponse } from 'msw'

import { ApproveOrderQuery } from '../approve-order'

export const approveOrderMock = http.patch<ApproveOrderQuery, never, never>(
  '/orders/:orderId/approve',
  async ({ params }) => {
    if (params.orderId === 'error-order-id') {
      return new HttpResponse(null, { status: 400 })
    }

    return new HttpResponse(null, { status: 204 })
  },
)
