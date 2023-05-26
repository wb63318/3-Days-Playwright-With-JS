// @ts-check
const { defineConfig, devices } = require("@playwright/test");

/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  testDir: "./tests",
  /* Run tests in files in parallel */

  reporter: "html",
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */

  //Maximum time one test can run for.

  timeout: 30 * 1000,
  expect: {
    timeout: 5000,
  },
  use: {
    browserName: "chromium",
    headless: false,
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },

    /*  {
      name: "galaxy",
      use: { ...devices["Galaxy S9+"] },
    }, */
  ],
});
