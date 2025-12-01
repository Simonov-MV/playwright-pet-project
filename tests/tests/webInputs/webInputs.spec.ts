import test, { expect } from '@playwright/test';
import { WebInputsPage } from '../../pages/WebInputsPage';

test.describe('Tests Web Inputs Page', () => {
  let webInputsPage: WebInputsPage;

  test.beforeEach(async ({ page }) => {
    webInputsPage = new WebInputsPage(page);
    await webInputsPage.openWebInputsPage();
  });

  test('Test Web Inputs', async ({ page }) => {
    await expect(page.locator('h1')).toContainText(
      'Web inputs page for Automation Testing Practice',
    );
  });

  test('Input number', async ({ page }) => {
    await webInputsPage.inputNumberBox.fill('234');
    await webInputsPage.displayInputsButton.click();
    await expect(webInputsPage.outputNumberBox).toContainText('234');
  });

  test('Input text', async ({ page }) => {
    await webInputsPage.inputTextBox.fill('test');
    await webInputsPage.displayInputsButton.click();
    await expect(webInputsPage.outputTextBox).toContainText('test');
  });

  test('Input password', async ({ page }) => {
    await webInputsPage.inputPasswordBox.fill('234');
    await webInputsPage.displayInputsButton.click();
    await expect(webInputsPage.outputPasswordBox).toContainText('234');
  });

  test('Input date', async ({ page }) => {
    await webInputsPage.inputDateBox.fill('2025-12-12');
    await webInputsPage.displayInputsButton.click();
    await expect(webInputsPage.outputDateBox).toContainText('2025-12-12');
  });

  test('Clear Inputs', async ({ page }) => {
    await webInputsPage.inputNumberBox.fill('234');
    await webInputsPage.inputTextBox.fill('test');
    await webInputsPage.inputPasswordBox.fill('234');
    await webInputsPage.inputDateBox.fill('2025-12-12');
    await webInputsPage.displayInputsButton.click();
    await expect(webInputsPage.outputDateBox).toContainText('2025-12-12');
    await webInputsPage.clearInputsButton.click();
    await expect(webInputsPage.inputNumberBox).toHaveValue('');
    await expect(webInputsPage.inputTextBox).toHaveValue('');
    await expect(webInputsPage.inputPasswordBox).toHaveValue('');
    await expect(webInputsPage.inputDateBox).toHaveValue('');
    await webInputsPage.displayInputsButton.click();
    await expect(webInputsPage.outputNumberBox).toContainText('');
    await expect(webInputsPage.outputTextBox).toContainText('');
    await expect(webInputsPage.outputPasswordBox).toContainText('');
    await expect(webInputsPage.outputDateBox).toContainText('');
  });
});
