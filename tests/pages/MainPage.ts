import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class MainPage extends BasePage {
  readonly webInputsLink: Locator;
  readonly webInputsLinkTryItOut: Locator;

  constructor(page: Page) {
    super(page);
    this.webInputsLink = page.getByRole('link', { name: 'Web inputs' });
    this.webInputsLinkTryItOut = page.getByRole('link', { name: 'Try it out' }).first();
  }

  // Open "Main page" site
  async openMainPage() {
    await this.page.goto('https://practice.expandtesting.com/');
  }
}
