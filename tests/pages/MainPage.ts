import { Locator, Page } from '@playwright/test';

export class MainPage {
  readonly page: Page;
  readonly webInputsLink: Locator;
  readonly webInputsLinkTryItOut: Locator;

  constructor(page: Page) {
    this.page = page;
    this.webInputsLink = page.getByRole('link', { name: 'Web inputs' });
    this.webInputsLinkTryItOut = page.getByRole('link', { name: 'Try it out' }).first();
  }
}
