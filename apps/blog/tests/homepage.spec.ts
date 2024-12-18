import { expect, test } from '@playwright/test';

test('homepage visual desktop', async ({ page }) => {
	await page.setViewportSize({ width: 1920, height: 1080 });
	await page.goto('/');
	await expect(page).toHaveScreenshot();
});

test('homepage visual mobile', async ({ page }) => {
	await page.setViewportSize({ width: 360, height: 740 });
	await page.goto('/');
	await expect(page).toHaveScreenshot();
});
