# 🍕 Pizza Shop (React)

Food delivery Dashboard for store management and order control.

## Running

> Node version: v20.10.0

Running app with its API. 
It requires back-end-api project running in parallel.
```sh
pnpm run dev
```

Running app without its API.
Uses Mock Service Worker (MSW) to simulate the back-end. 
```sh
pnpm run dev:test
```

Running E2E Tests with UI rendering (Playwright).
```sh
pnpm run dev:test-ui
```

## Features

- React
- React Router DOM
- Tailwind
- Shadcn/UI
- Recharts
- React Query
- Radix
- Mock Service Worker
- Playwright

## Aprendizados importantes

- JWT Authentication
- Caching and revalidation
- Back-end connection (API)
- Unit and E2E Tests

## Functionalities

- Establishment registration;
- User login (magic link);
- Establishment's profile update;
- Order management;
- Metrics for dashboard;
  - Graph of monthly revenue;
  - Graph of monthly orders;
  - Graph of daily orders;
  - Graph of monthly canceled orders;
  - Average number of orders per day;
  - Graph of best-seller products;