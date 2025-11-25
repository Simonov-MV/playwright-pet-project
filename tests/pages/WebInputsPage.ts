import { Locator, Page } from '@playwright/test';
import { MainPage } from './MainPage';

export class WebInputsPage extends MainPage {
  openCreatLinkSite() {
    throw new Error('Method not implemented.');
  }

  readonly displayInputsButton: Locator;
  readonly clearInputsButton: Locator;
  readonly inputNumberBox: Locator;
  readonly inputTextBox: Locator;
  readonly inputPasswordBox: Locator;
  readonly inputDateBox: Locator;

  constructor(page: Page) {
    super(page);
    this.displayInputsButton = page.getByRole('button', { name: 'Display Inputs' });
    this.clearInputsButton = page.getByRole('button', { name: 'Clear Inputs' });
    this.inputNumberBox = page.getByRole('spinbutton', { name: 'Input: Number' });
    this.inputTextBox = page.getByRole('textbox', { name: 'Input: Text' });
    this.inputPasswordBox = page.getByRole('textbox', { name: 'Input: Password' });
    this.inputDateBox = page.getByRole('textbox', { name: 'Input: Date' });
  }

  // Open "Web inputs" site
  async openWebInputsPage() {
    await this.page.goto('https://practice.expandtesting.com/inputs', {
      waitUntil: 'domcontentloaded',
    });
    await this.displayInputsButton.waitFor();
  }
}
