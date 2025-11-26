import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class WebInputsPage extends BasePage {
  openCreatLinkSite() {
    throw new Error('Method not implemented.');
  }

  readonly displayInputsButton: Locator;
  readonly clearInputsButton: Locator;
  readonly inputNumberBox: Locator;
  readonly inputTextBox: Locator;
  readonly inputPasswordBox: Locator;
  readonly inputDateBox: Locator;
  readonly outputNumberBox: Locator;
  readonly outputTextBox: Locator;
  readonly outputPasswordBox: Locator;
  readonly outputDateBox: Locator;

  constructor(page: Page) {
    super(page);
    this.displayInputsButton = page.getByRole('button', { name: 'Display Inputs' });
    this.clearInputsButton = page.getByRole('button', { name: 'Clear Inputs' });
    this.inputNumberBox = page.getByRole('spinbutton', { name: 'Input: Number' });
    this.inputTextBox = page.getByRole('textbox', { name: 'Input: Text' });
    this.inputPasswordBox = page.getByRole('textbox', { name: 'Input: Password' });
    this.inputDateBox = page.getByRole('textbox', { name: 'Input: Date' });
    this.outputNumberBox = page.locator('#output-number');
    this.outputTextBox = page.locator('#output-text');
    this.outputPasswordBox = page.locator('#output-password');
    this.outputDateBox = page.locator('#output-date');
  }

  // Open "Web inputs" site
  async openWebInputsPage() {
    await this.page.goto('https://practice.expandtesting.com/inputs', {
      waitUntil: 'domcontentloaded',
    });
    await this.displayInputsButton.waitFor();
  }
}
