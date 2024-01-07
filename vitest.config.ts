import path from 'path';
import { defaultExclude, defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./test/setup.ts'],
    exclude: [...defaultExclude, 'e2e/**'],
    coverage: {
      provider: 'istanbul',
      exclude: [
        ...defaultExclude,
        '.next/**',
        'next.config.js',
        'postcss.config.js',
        'tailwind.config.ts',
        'test/**',
      ],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
});
