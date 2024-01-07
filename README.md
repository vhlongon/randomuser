# Randomuser

![Coverage Badge](https://raw.githubusercontent.com/gist/vhlongon/b1f395b2532fc512e4b3ce4fa294e1b9/raw/badge.svg)

This is a simple [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

it fetches data from [randomuser.me](https://randomuser.me/api/) and displays the user information in a card.

The project uses:

- [Material UI](https://mui.com/material-ui/) for styling and components
- Next js [Server components](https://nextjs.org/docs/app/building-your-application/rendering/server-components) for fetching data on the server side
- [Zod](https://github.com/colinhacks/zod) for runtime type validation
- [Vitest](https://vitest.dev/) and [Testing library](https://testing-library.com/) for testing
- [MSW](https://mswjs.io/) for mocking the API calls in tests
- [Playwright](https://playwright.dev/) for e2e testing

Make sure you have [pnpm](https://pnpm.io/) installed. If you don't, you can install it with `npm i -g pnpm`.

## Getting Started

First, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Running tests

```bash
pnpm test
```

or

```bash
pnpm coverage
```

to get a coverage. See the result report under `coverage/`

To run the e2e tests run:

```bash
pnpm test:e2e
```
