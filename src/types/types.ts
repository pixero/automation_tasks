import { World as CucumberWorld } from '@cucumber/cucumber';
import { BrowserContext, Page } from 'playwright';
import { GooglePage } from '../pages/google.page';

export interface OurWorld extends CucumberWorld {
    context: BrowserContext;
    page: Page;
    expectedUrl: string;
    googlePage: GooglePage;
}
