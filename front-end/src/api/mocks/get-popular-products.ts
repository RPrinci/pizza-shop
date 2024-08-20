import { http, HttpResponse } from 'msw'

import { GetPopularProductsResponse } from '../get-popular-products'

export const getPopularProductsMock = http.get<
  never,
  never,
  GetPopularProductsResponse
>('/metrics/popular-products', () => {
  return HttpResponse.json([
    { product: 'Muzzarela', amount: 12 },
    { product: 'Frango com Catupiry', amount: 17 },
    { product: 'Portuguesa', amount: 15 },
    { product: 'Quatro Queijos', amount: 7 },
    { product: 'Regina', amount: 20 },
  ])
})
