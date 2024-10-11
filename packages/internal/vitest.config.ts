// vitest.config.ts
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    name: '@nant-es/internal',
    coverage: {
      enabled: true,
      provider: 'v8', // or 'v8',
      reporter: ['text', 'json', 'html'],
      include: ['src/**/*'],
      exclude: ['src/**/*.d.ts', 'src/**/*.spec.ts', 'src/**/*.test.ts'],
    },
    browser: {
      provider: 'playwright', // or 'webdriverio'
      enabled: true,
      name: 'chromium', // browser name is required
    },
  },
})