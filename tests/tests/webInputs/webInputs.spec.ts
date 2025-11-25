import test, { expect } from '@playwright/test';
import { WebInputsPage } from '../../pages/WebInputsPage';

test.describe('Tests Web Inputs Page', () => {
  let webInputsPage: WebInputsPage;

  test('Test Web Inputs', async ({ page }) => {
    webInputsPage = new WebInputsPage(page);
    await webInputsPage.openWebInputsPage();
    await expect(page.locator('h1')).toContainText(
      'Web inputs page for Automation Testing Practice',
    );
  });
});
