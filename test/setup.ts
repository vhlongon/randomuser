import React from 'react';
import 'vitest-dom/extend-expect';
import { server } from './mocks/server';
import { testQueryClient } from './mocks/utils';

global.React = React;

server.events.on('request:start', ({ request }) => {
  console.info('MSW intercepted:', request.method, request.url);
});

beforeAll(() => server.listen());

afterEach(() => {
  testQueryClient.removeQueries();
  server.resetHandlers();
});
afterAll(() => server.close());
