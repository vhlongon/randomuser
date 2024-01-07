import { expect, test } from '@playwright/test';

test('shows user info', async ({ page }) => {
  await page.goto('/');
  page.getByTestId('loading-user-card').waitFor({ state: 'hidden' });

  await expect(page).toHaveTitle(/Random user/);
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();

  const emailItem = page.getByTestId('email');
  const addressItem = page.getByTestId('address');
  const phoneItem = page.getByTestId('phone');
  const dobItem = page.getByTestId('dob');

  await expect(emailItem.getByRole('link')).toHaveAttribute('href', /^mailto:/);
  await expect(addressItem.getByRole('link')).toHaveAttribute(
    'href',
    /https:\/\/www\.google\.com\/maps\/search\/\?api=/
  );
  await expect(phoneItem.getByRole('link')).toHaveAttribute('href', /^tel:/);
  await expect(dobItem).toHaveText(/.+Age: \d+.+/);

  const showMoreInfoButton = page.getByRole('button', {
    name: /Show extra info/,
  });

  await showMoreInfoButton.click();

  await expect(page.getByText(/seed:/, { exact: false })).toBeVisible();
  await expect(page.getByText(/results:/, { exact: false })).toBeVisible();
  await expect(page.getByText(/page:/, { exact: false })).toBeVisible();
  await expect(page.getByText(/version:/, { exact: false })).toBeVisible();

  const showLessInfoButton = page.getByRole('button', {
    name: /Hide extra info/,
  });

  await showLessInfoButton.click();

  await expect(page.getByText(/seed:/, { exact: false })).not.toBeVisible();
  await expect(page.getByText(/results:/, { exact: false })).not.toBeVisible();
  await expect(page.getByText(/page:/, { exact: false })).not.toBeVisible();
  await expect(page.getByText(/version:/, { exact: false })).not.toBeVisible();
});
