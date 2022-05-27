import {
  After, AfterAll, Before, BeforeAll, Status, setDefaultTimeout,
} from '@cucumber/cucumber';
import {
  devices, chromium, firefox, webkit, BrowserType,
} from 'playwright';
import { config } from './config';
import { OurWorld } from '../types/types';

declare let global: any;

const selectBrowser = async (browserName:string):Promise<BrowserType> => {
  switch (browserName) {
    case 'webkit':
      return webkit;
    case 'firefox':
      return firefox;
    default:
      return chromium;
  }
};
// убираем таймаут для debug режима
setDefaultTimeout(process.env.PWDEBUG ? -1 : 15 * 1000);

BeforeAll(async () => {
  // Browsers are expensive in Playwright so only create 1
  const browser = await selectBrowser(process.env.browser as string);
  global.browser = await browser.launch(config.browserOptions);
  // устанавливаем базовый url из env
});

AfterAll(async () => {
  await global.browser.close();
});


Before(async function (this: OurWorld) {
  const device = devices['Desktop Chrome'];
  this.context = await global.browser.newContext({
    viewport: { height: 1080, width: 1920 },
    userAgent: device.userAgent,
  });
  this.page = await this.context.newPage();
});

// Cleanup after each scenario
After(async function (this: OurWorld) {
  await this.page?.close();
  await this.context?.close();
});

