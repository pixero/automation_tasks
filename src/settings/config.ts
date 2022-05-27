import { LaunchOptions } from 'playwright';

const browserOptions: LaunchOptions = {
  slowMo: 0,
  args: process.env.browser === 'chromium' ? ['--use-fake-ui-for-media-stream', '--use-fake-device-for-media-stream'] : [],
  firefoxUserPrefs: {
    'media.navigator.streams.fake': true,
    'media.navigator.permission.disabled': true,
  },
  // headless указывается в env, если в env не задано, то запускаем в headless режиме
  headless: process.env.headless === 'true',
};

export const config = {
  browserOptions,
};
