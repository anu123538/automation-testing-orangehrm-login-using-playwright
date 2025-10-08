// playwright.config.js
module.exports = {
  use: {
    headless: false, // set to true to run in background
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    baseURL: 'https://opensource-demo.orangehrmlive.com',
  },
  reporter: [['html', { open: 'never' }]],
  timeout: 30000,
};
